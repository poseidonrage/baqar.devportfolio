import { json, type ActionFunctionArgs } from "@remix-run/node";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";
import { ADMIN_USERNAME, ADMIN_PASSWORD_HASH, JWT_SECRET } from "~/auth.server";

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return json({ error: "Username and password are required" }, { status: 400 });
    }

    // Check visitor credentials
    if (username === "visitor" && password === "visitor110") {
      const token = jwt.sign({ role: "visitor" }, JWT_SECRET, { expiresIn: "7d" });
      return json({ token, role: "visitor" });
    }

    // Check admin credentials
    if (username === ADMIN_USERNAME && bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
      const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, { expiresIn: "24h" });
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

      // Save session in DB
      await prisma.adminSession.create({
        data: {
          token,
          adminUsername: username,
          expiresAt,
        },
      });

      return json({ token, role: "admin" });
    }

    return json({ error: "Invalid username or password" }, { status: 401 });
  } catch (error) {
    console.error("Roadmap login error:", error);
    return json({ error: "Login failed" }, { status: 500 });
  }
}
