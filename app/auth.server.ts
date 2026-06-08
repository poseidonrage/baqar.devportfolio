import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD_PLAIN = process.env.ADMIN_PASSWORD || "admin123";
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(ADMIN_PASSWORD_PLAIN, 10);
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey123";

export interface AuthContext {
  role: "admin" | "visitor";
  adminUsername?: string;
}

export async function authenticateRoadmapRequest(request: Request): Promise<AuthContext> {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Response(JSON.stringify({ error: "Unauthorized: No token provided" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  const token = authHeader.split(" ")[1];

  // 1. Check if it's a valid admin session from the DB
  const adminSession = await prisma.adminSession.findUnique({
    where: { token }
  });

  if (adminSession) {
    if (new Date() > adminSession.expiresAt) {
      await prisma.adminSession.delete({ where: { token } }).catch(() => {});
      throw new Response(JSON.stringify({ error: "Unauthorized: Session expired" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    return { role: "admin", adminUsername: adminSession.adminUsername };
  }

  // 2. Otherwise, verify it as a JWT visitor or admin token
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    if (decoded.role === "visitor") {
      return { role: "visitor" };
    } else if (decoded.username === ADMIN_USERNAME) {
      return { role: "admin", adminUsername: decoded.username };
    }
  } catch (err) {
    throw new Response(JSON.stringify({ error: "Unauthorized: Invalid token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  throw new Response(JSON.stringify({ error: "Unauthorized: Invalid session" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}

export async function authenticateAdminRequest(request: Request): Promise<{ username: string; token: string }> {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Response(JSON.stringify({ error: "Unauthorized: No token provided" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  const token = authHeader.split(" ")[1];

  // Verify JWT
  let decoded: any;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Response(JSON.stringify({ error: "Unauthorized: Invalid or expired token" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Check if session exists in DB
  const session = await prisma.adminSession.findUnique({
    where: { token }
  });

  if (!session) {
    throw new Response(JSON.stringify({ error: "Unauthorized: Session not found" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Check if session is expired
  if (new Date() > session.expiresAt) {
    await prisma.adminSession.delete({ where: { token } }).catch(() => {});
    throw new Response(JSON.stringify({ error: "Unauthorized: Session expired" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  return { username: decoded.username, token };
}

export { ADMIN_USERNAME, ADMIN_PASSWORD_HASH, JWT_SECRET };
