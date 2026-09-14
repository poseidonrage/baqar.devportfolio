import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

dotenv.config();

// Fix Supabase transaction pooler prepared statement error by appending pgbouncer=true dynamically
if (process.env.DATABASE_URL) {
  let dbUrl = process.env.DATABASE_URL;
  if (dbUrl.includes(":6543") && !dbUrl.includes("pgbouncer=true")) {
    const separator = dbUrl.includes("?") ? "&" : "?";
    process.env.DATABASE_URL = `${dbUrl}${separator}pgbouncer=true`;
    console.log(
      "Modified DATABASE_URL to include pgbouncer=true for Transaction Mode pooler",
    );
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

const prisma = new PrismaClient();

// Configure CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

// Load admin credentials from env with default values
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "harshmelllow";
const ADMIN_PASSWORD_PLAIN = process.env.ADMIN_PASSWORD || "Hankies12345**";
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(ADMIN_PASSWORD_PLAIN, 10);
const JWT_SECRET = process.env.JWT_SECRET || "$upersecretkey12K4";

// Authentication middleware
async function authenticateAdmin(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    const token = authHeader.split(" ")[1];

    // Verify JWT
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Invalid or expired token" });
    }

    // Check if session exists in DB
    const session = await prisma.adminSession.findUnique({
      where: { token },
    });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized: Session not found" });
    }

    // Check if session is expired
    if (new Date() > session.expiresAt) {
      // Clean up expired session
      await prisma.adminSession.delete({ where: { token } }).catch(() => {});
      return res.status(401).json({ error: "Unauthorized: Session expired" });
    }

    req.admin = decoded;
    req.token = token;
    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Roadmap Authentication middleware (works for both admin and visitor)
async function authenticateRoadmap(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    const token = authHeader.split(" ")[1];

    // 1. Check if it's a valid admin session from the DB
    const adminSession = await prisma.adminSession.findUnique({
      where: { token },
    });

    if (adminSession) {
      if (new Date() > adminSession.expiresAt) {
        await prisma.adminSession.delete({ where: { token } }).catch(() => {});
        return res.status(401).json({ error: "Unauthorized: Session expired" });
      }
      req.role = "admin";
      req.adminUsername = adminSession.adminUsername;
      return next();
    }

    // 2. Otherwise, verify it as a JWT visitor or admin token
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (decoded.role === "visitor") {
        req.role = "visitor";
        return next();
      } else if (decoded.username === ADMIN_USERNAME) {
        req.role = "admin";
        req.adminUsername = decoded.username;
        return next();
      }
    } catch (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    return res.status(401).json({ error: "Unauthorized: Invalid session" });
  } catch (error) {
    console.error("Roadmap auth middleware error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// ----------------------------------------------------
// Public API Routes
// ----------------------------------------------------

// POST /api/stats - Record visitor statistics
app.post("/api/stats", async (req, res) => {
  try {
    const { page, referrer } = req.body;
    const ip = req.ip || req.headers["x-forwarded-for"] || null;
    const userAgent = req.headers["user-agent"] || null;

    const stat = await prisma.visitorStat.create({
      data: {
        page: page || "/",
        referrer: referrer || null,
        ip,
        userAgent,
      },
    });

    res.status(201).json({ success: true, data: stat });
  } catch (error) {
    console.error("Error saving visitor stat:", error);
    res.status(500).json({ error: "Failed to record visitor stats" });
  }
});

// POST /api/contact - Record contact form messages
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const newMessage = await prisma.message.create({
      data: { name, email, message },
    });

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ error: "Failed to submit contact message" });
  }
});

// POST /api/admin/login - Authenticate admin & issue JWT
app.post("/api/admin/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const resolvedUsername = username || ADMIN_USERNAME;

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    if (
      resolvedUsername !== ADMIN_USERNAME ||
      !bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)
    ) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate JWT token (expires in 24h)
    const token = jwt.sign({ username: resolvedUsername }, JWT_SECRET, {
      expiresIn: "24h",
    });
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

    // Save session in DB
    await prisma.adminSession.create({
      data: {
        token,
        adminUsername: resolvedUsername,
        expiresAt,
      },
    });

    res.json({ token, username: resolvedUsername, expiresAt });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

// GET /api/debug-db - Diagnostics for database connectivity
app.get("/api/debug-db", async (req, res) => {
  try {
    const rawUrl = process.env.DATABASE_URL || "";
    let maskedUrl = "undefined";
    let host = "unknown";
    let dbName = "unknown";

    if (rawUrl) {
      // Mask password in DATABASE_URL
      maskedUrl = rawUrl.replace(/:([^:@]+)@/, ":****@");

      try {
        // Simple parse
        const match = rawUrl.match(/@([^:/]+)(?::(\d+))?\/([^?]+)/);
        if (match) {
          host = match[1];
          dbName = match[3];
        }
      } catch (err) {
        console.error("Failed to parse DATABASE_URL:", err);
      }
    }

    // Try a simple database check
    let connectionOk = false;
    let count = 0;
    let dbError = null;
    try {
      count = await prisma.blog.count();
      connectionOk = true;
    } catch (err) {
      dbError = err.message || String(err);
    }

    res.json({
      success: true,
      timestamp: new Date().toISOString(),
      environment: {
        NODE_ENV: process.env.NODE_ENV || "development",
        PORT: process.env.PORT || 5000,
        HAS_DATABASE_URL: !!rawUrl,
        DATABASE_URL_MASKED: maskedUrl,
        parsed: {
          host,
          database: dbName,
        },
      },
      databaseConnection: {
        ok: connectionOk,
        blogsCount: count,
        error: dbError,
      },
    });
  } catch (error) {
    console.error("Debug DB endpoint error:", error);
    res.status(500).json({ error: error.message || String(error) });
  }
});

// GET /api/blogs - Get published blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { comments: { where: { approved: true } } },
        },
      },
    });
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// GET /api/blogs/:slug - Get blog by slug
app.get("/api/blogs/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await prisma.blog.findUnique({
      where: { slug, published: true },
      include: {
        comments: {
          where: { approved: true },
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ error: "Failed to fetch blog post" });
  }
});

// POST /api/blogs/:id/comments - Add comment to blog post (requires approval)
app.post("/api/blogs/:id/comments", async (req, res) => {
  try {
    const { id } = req.params;
    const { authorName, authorEmail, content } = req.body;
    let blogId;

    const parsedId = parseInt(id);
    if (!isNaN(parsedId)) {
      blogId = parsedId;
    } else {
      // Find blog by slug
      const blog = await prisma.blog.findUnique({
        where: { slug: id },
      });
      if (!blog) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      blogId = blog.id;
    }

    if (!authorName || !authorEmail || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(authorEmail)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Verify blog exists
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    const comment = await prisma.comment.create({
      data: {
        authorName,
        authorEmail,
        content,
        blogId,
        approved: false, // Moderation required
      },
    });

    res.status(201).json({
      success: true,
      message: "Comment submitted successfully, awaiting moderation.",
      data: comment,
    });
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ error: "Failed to submit comment" });
  }
});

// GET /api/blogs/:slugOrId/comments - Get approved comments for a blog post
app.get("/api/blogs/:slugOrId/comments", async (req, res) => {
  try {
    const { slugOrId } = req.params;
    const blogId = parseInt(slugOrId);

    let whereClause = {};
    if (!isNaN(blogId)) {
      whereClause = {
        OR: [{ blogId: blogId }, { blog: { slug: slugOrId } }],
        approved: true,
      };
    } else {
      whereClause = {
        blog: { slug: slugOrId },
        approved: true,
      };
    }

    const comments = await prisma.comment.findMany({
      where: whereClause,
      orderBy: { createdAt: "asc" },
    });
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// ----------------------------------------------------
// Authenticated Admin Routes
// ----------------------------------------------------

// POST /api/admin/logout - Invalidate admin session
app.post("/api/admin/logout", authenticateAdmin, async (req, res) => {
  try {
    await prisma.adminSession.delete({
      where: { token: req.token },
    });
    res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ error: "Logout failed" });
  }
});

// GET /api/admin/stats - Retrieve visitor statistics
app.get("/api/admin/stats", authenticateAdmin, async (req, res) => {
  try {
    // Total visits
    const totalVisits = await prisma.visitorStat.count();

    // Unique visitors (by IP)
    const uniqueIPs = await prisma.visitorStat.groupBy({
      by: ["ip"],
      _count: true,
    });
    const uniqueVisitors = uniqueIPs.length;

    // Page view counts
    const pageViews = await prisma.visitorStat.groupBy({
      by: ["page"],
      _count: {
        page: true,
      },
      orderBy: {
        _count: {
          page: "desc",
        },
      },
    });

    // Recent visitor log (last 100 entries)
    const recentVisits = await prisma.visitorStat.findMany({
      orderBy: { timestamp: "desc" },
      take: 100,
    });

    res.json({
      totalVisits,
      uniqueVisitors,
      pageViews,
      recentVisits,
    });
  } catch (error) {
    console.error("Error retrieving stats:", error);
    res.status(500).json({ error: "Failed to retrieve stats" });
  }
});

// GET /api/admin/messages - Retrieve contact form messages
app.get("/api/admin/messages", authenticateAdmin, async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(messages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
});

// DELETE /api/admin/messages/:id - Delete a contact message
app.delete("/api/admin/messages/:id", authenticateAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid message ID" });
    }

    await prisma.message.delete({
      where: { id },
    });

    res.json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ error: "Failed to delete message" });
  }
});

// --- Blog CRUD (Admin) ---

// GET /api/admin/blogs - Get all blogs (including unpublished drafts)
app.get("/api/admin/blogs", authenticateAdmin, async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        comments: {
          select: { id: true, approved: true },
        },
      },
    });
    res.json(blogs);
  } catch (error) {
    console.error("Error fetching admin blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// GET /api/admin/blogs/:id - Get a blog by ID (draft or published)
app.get("/api/admin/blogs/:id", authenticateAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }

    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        comments: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

// POST /api/admin/blogs - Create a blog post
app.post("/api/admin/blogs", authenticateAdmin, async (req, res) => {
  try {
    const {
      title,
      slug,
      content,
      summary,
      published,
      category,
      readTime,
      tags,
      keyTakeaways,
    } = req.body;

    if (!title || !slug || !content) {
      return res
        .status(400)
        .json({ error: "Title, slug, and content are required" });
    }

    // Verify slug uniqueness
    const existing = await prisma.blog.findUnique({
      where: { slug },
    });
    if (existing) {
      return res.status(400).json({ error: "Blog slug already exists" });
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        summary: summary || null,
        published: published ?? false,
        category: category || "Backend",
        readTime: readTime || "5 min read",
        tags: tags || null,
        keyTakeaways: keyTakeaways || null,
      },
    });

    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

// PUT /api/admin/blogs/:id - Update a blog post
app.put("/api/admin/blogs/:id", authenticateAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }

    const {
      title,
      slug,
      content,
      summary,
      published,
      category,
      readTime,
      tags,
      keyTakeaways,
    } = req.body;

    // Check if blog exists
    const existingBlog = await prisma.blog.findUnique({
      where: { id },
    });
    if (!existingBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    // If slug is changing, verify uniqueness
    if (slug && slug !== existingBlog.slug) {
      const existingSlug = await prisma.blog.findUnique({
        where: { slug },
      });
      if (existingSlug) {
        return res.status(400).json({ error: "Blog slug already exists" });
      }
    }

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        title: title ?? existingBlog.title,
        slug: slug ?? existingBlog.slug,
        content: content ?? existingBlog.content,
        summary: summary !== undefined ? summary : existingBlog.summary,
        published: published ?? existingBlog.published,
        category: category ?? existingBlog.category,
        readTime: readTime ?? existingBlog.readTime,
        tags: tags !== undefined ? tags : existingBlog.tags,
        keyTakeaways:
          keyTakeaways !== undefined ? keyTakeaways : existingBlog.keyTakeaways,
      },
    });

    res.json({ success: true, data: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// DELETE /api/admin/blogs/:id - Delete a blog post
app.delete("/api/admin/blogs/:id", authenticateAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid blog ID" });
    }

    await prisma.blog.delete({
      where: { id },
    });

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

// --- Comment Moderation (Admin) ---

// GET /api/admin/comments - Get all comments
app.get("/api/admin/comments", authenticateAdmin, async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        blog: {
          select: { title: true, slug: true },
        },
      },
    });
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// PUT /api/admin/comments/:id - Moderate a comment (e.g. approve/reject status)
app.put("/api/admin/comments/:id", authenticateAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid comment ID" });
    }

    const { approved } = req.body;
    if (approved === undefined) {
      return res
        .status(400)
        .json({ error: "approved boolean field is required" });
    }

    const updatedComment = await prisma.comment.update({
      where: { id },
      data: { approved: !!approved },
    });

    res.json({ success: true, data: updatedComment });
  } catch (error) {
    console.error("Error moderating comment:", error);
    res.status(500).json({ error: "Failed to moderate comment" });
  }
});

// DELETE /api/admin/comments/:id - Delete a comment
app.delete("/api/admin/comments/:id", authenticateAdmin, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid comment ID" });
    }

    await prisma.comment.delete({
      where: { id },
    });

    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

// ----------------------------------------------------
// Roadmap API Routes
// ----------------------------------------------------

// POST /api/roadmap/login - Authenticate admin or visitor for the roadmap
app.post("/api/roadmap/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    // Check visitor credentials
    if (username === "visitor" && password === "visitor110") {
      const token = jwt.sign({ role: "visitor" }, JWT_SECRET, {
        expiresIn: "7d",
      });
      return res.json({ token, role: "visitor" });
    }

    // Check admin credentials
    if (
      username === ADMIN_USERNAME &&
      bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)
    ) {
      const token = jwt.sign({ username, role: "admin" }, JWT_SECRET, {
        expiresIn: "24h",
      });
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

      // Save session in DB
      await prisma.adminSession.create({
        data: {
          token,
          adminUsername: username,
          expiresAt,
        },
      });

      return res.json({ token, role: "admin" });
    }

    return res.status(401).json({ error: "Invalid username or password" });
  } catch (error) {
    console.error("Roadmap login error:", error);
    res.status(500).json({ error: "Login failed" });
  }
});

// GET /api/roadmap/progress - Get checklist progress for role
app.get("/api/roadmap/progress", authenticateRoadmap, async (req, res) => {
  try {
    const progress = await prisma.roadmapProgress.findMany({
      where: { role: req.role },
    });
    res.json(progress);
  } catch (error) {
    console.error("Error fetching progress:", error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});

// POST /api/roadmap/progress - Toggle/save checklist progress for role
app.post("/api/roadmap/progress", authenticateRoadmap, async (req, res) => {
  try {
    const { taskId, completed } = req.body;
    if (!taskId) {
      return res.status(400).json({ error: "taskId is required" });
    }
    const isCompleted = !!completed;

    const record = await prisma.roadmapProgress.upsert({
      where: {
        taskId_role: {
          taskId,
          role: req.role,
        },
      },
      update: { completed: isCompleted },
      create: {
        taskId,
        role: req.role,
        completed: isCompleted,
      },
    });

    res.json({ success: true, data: record });
  } catch (error) {
    console.error("Error saving progress:", error);
    res.status(500).json({ error: "Failed to save progress" });
  }
});

// GET /api/roadmap/journal - Get journal entries for role
app.get("/api/roadmap/journal", authenticateRoadmap, async (req, res) => {
  try {
    const journals = await prisma.roadmapJournal.findMany({
      where: { role: req.role },
    });
    res.json(journals);
  } catch (error) {
    console.error("Error fetching journals:", error);
    res.status(500).json({ error: "Failed to fetch journal entries" });
  }
});

// POST /api/roadmap/journal - Save or update journal entry for role
app.post("/api/roadmap/journal", authenticateRoadmap, async (req, res) => {
  try {
    const { id, learned, difficulties, notes } = req.body;
    if (!id) {
      return res
        .status(400)
        .json({ error: "Journal ID (week reference) is required" });
    }

    const record = await prisma.roadmapJournal.upsert({
      where: {
        weekId_role: {
          weekId: id,
          role: req.role,
        },
      },
      update: {
        learned: learned || "",
        difficulties: difficulties || "",
        notes: notes || "",
      },
      create: {
        weekId: id,
        role: req.role,
        learned: learned || "",
        difficulties: difficulties || "",
        notes: notes || "",
      },
    });

    res.json({ success: true, data: record });
  } catch (error) {
    console.error("Error saving journal:", error);
    res.status(500).json({ error: "Failed to save journal entry" });
  }
});

// ----------------------------------------------------
// Frontend Static Files and SPA Fallback Route
// ----------------------------------------------------

const distPath = path.join(process.cwd(), "dist");

// Serve static assets from Vite build output folder (dist/)
app.use(express.static(distPath));

// SPA fallback: serve index.html for any unhandled routes
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// For Vercel Serverless Functions, we export the app instead of calling app.listen()
// if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
//   app.listen(PORT, () => {
//     console.log(`Backend server running on http://localhost:${PORT}`);
//   });
// }

// Start server on Coolify
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server running on port ${PORT}`);
});

export default app;
