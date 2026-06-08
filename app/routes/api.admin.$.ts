import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";
import { authenticateAdminRequest, ADMIN_USERNAME, ADMIN_PASSWORD_HASH, JWT_SECRET } from "~/auth.server";

export async function loader({ request, params }: LoaderFunctionArgs) {
  const splat = params["*"] || "";
  const pathParts = splat.split("/");
  const route = pathParts[0];

  // All loader routes require admin authentication
  try {
    await authenticateAdminRequest(request);
  } catch (error) {
    if (error instanceof Response) return error;
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    switch (route) {
      case "stats": {
        const totalVisits = await prisma.visitorStat.count();
        const uniqueIPs = await prisma.visitorStat.groupBy({
          by: ["ip"],
          _count: true,
        });
        const uniqueVisitors = uniqueIPs.length;

        const pageViews = await prisma.visitorStat.groupBy({
          by: ["page"],
          _count: { page: true },
          orderBy: { _count: { page: "desc" } },
        });

        const recentVisits = await prisma.visitorStat.findMany({
          orderBy: { timestamp: "desc" },
          take: 100,
        });

        return json({
          totalVisits,
          uniqueVisitors,
          pageViews,
          recentVisits,
        });
      }

      case "blogs": {
        if (pathParts.length === 2) {
          // GET /api/admin/blogs/:id
          const blogId = parseInt(pathParts[1], 10);
          if (isNaN(blogId)) {
            const blog = await prisma.blog.findUnique({ where: { slug: pathParts[1] } });
            return json(blog);
          }
          const blog = await prisma.blog.findUnique({ where: { id: blogId } });
          return json(blog);
        }

        // GET /api/admin/blogs
        const blogs = await prisma.blog.findMany({
          orderBy: { createdAt: "desc" }
        });
        return json(blogs);
      }

      case "comments": {
        const comments = await prisma.comment.findMany({
          include: { blog: true },
          orderBy: { createdAt: "desc" }
        });
        return json(comments.map(c => ({
          id: c.id,
          blogId: c.blogId,
          postSlug: c.blog.slug,
          authorName: c.authorName,
          content: c.content,
          approved: c.approved,
          createdAt: c.createdAt.toISOString()
        })));
      }

      case "messages": {
        const messages = await prisma.message.findMany({
          orderBy: { createdAt: "desc" }
        });
        return json(messages);
      }

      default:
        return json({ error: `Not found: ${splat}` }, { status: 404 });
    }
  } catch (error: any) {
    console.error(`Loader error on ${splat}:`, error);
    return json({ error: error.message || "Failed to process query" }, { status: 500 });
  }
}

export async function action({ request, params }: ActionFunctionArgs) {
  const splat = params["*"] || "";
  const pathParts = splat.split("/");
  const route = pathParts[0];

  // Special case: login does NOT require authentication
  if (route === "login" && request.method === "POST") {
    try {
      const { username, password } = await request.json();
      const resolvedUsername = username || ADMIN_USERNAME;

      if (!password) {
        return json({ error: "Password is required" }, { status: 400 });
      }

      if (resolvedUsername !== ADMIN_USERNAME || !bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
        return json({ error: "Invalid username or password" }, { status: 401 });
      }

      const token = jwt.sign({ username: resolvedUsername }, JWT_SECRET, { expiresIn: "24h" });
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

      await prisma.adminSession.create({
        data: {
          token,
          adminUsername: resolvedUsername,
          expiresAt,
        },
      });

      return json({ token, username: resolvedUsername, expiresAt });
    } catch (error) {
      console.error("Login action error:", error);
      return json({ error: "Login failed" }, { status: 500 });
    }
  }

  // All other actions require admin authentication
  try {
    await authenticateAdminRequest(request);
  } catch (error) {
    if (error instanceof Response) return error;
    return json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const method = request.method;

    if (route === "blogs") {
      if (method === "POST") {
        const { title, slug, content, summary, published, category, readTime, tags, keyTakeaways } = await request.json();

        if (!title || !slug || !content) {
          return json({ error: "Title, slug, and content are required" }, { status: 400 });
        }

        const existing = await prisma.blog.findUnique({ where: { slug } });
        if (existing) {
          return json({ error: "Blog slug already exists" }, { status: 400 });
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
        return json({ success: true, data: blog }, { status: 201 });
      }

      if (method === "PUT" && pathParts.length === 2) {
        const id = parseInt(pathParts[1], 10);
        if (isNaN(id)) {
          return json({ error: "Invalid blog ID" }, { status: 400 });
        }

        const { title, slug, content, summary, published, category, readTime, tags, keyTakeaways } = await request.json();

        const existingBlog = await prisma.blog.findUnique({ where: { id } });
        if (!existingBlog) {
          return json({ error: "Blog not found" }, { status: 404 });
        }

        if (slug && slug !== existingBlog.slug) {
          const existingSlug = await prisma.blog.findUnique({ where: { slug } });
          if (existingSlug) {
            return json({ error: "Blog slug already exists" }, { status: 400 });
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
            keyTakeaways: keyTakeaways !== undefined ? keyTakeaways : existingBlog.keyTakeaways,
          },
        });
        return json({ success: true, data: updatedBlog });
      }

      if (method === "DELETE" && pathParts.length === 2) {
        const id = parseInt(pathParts[1], 10);
        if (isNaN(id)) {
          return json({ error: "Invalid blog ID" }, { status: 400 });
        }

        await prisma.blog.delete({ where: { id } });
        return json({ success: true });
      }
    }

    if (route === "comments") {
      if (pathParts.length === 3 && pathParts[2] === "approve" && (method === "PUT" || method === "POST")) {
        const commentId = parseInt(pathParts[1], 10);
        if (isNaN(commentId)) {
          return json({ error: "Invalid comment ID" }, { status: 400 });
        }

        await prisma.comment.update({
          where: { id: commentId },
          data: { approved: true }
        });
        return json({ success: true });
      }

      if (method === "PUT" && pathParts.length === 2) {
        const commentId = parseInt(pathParts[1], 10);
        if (isNaN(commentId)) {
          return json({ error: "Invalid comment ID" }, { status: 400 });
        }

        const { approved } = await request.json();
        await prisma.comment.update({
          where: { id: commentId },
          data: { approved: !!approved }
        });
        return json({ success: true });
      }

      if (method === "DELETE" && pathParts.length === 2) {
        const commentId = parseInt(pathParts[1], 10);
        if (isNaN(commentId)) {
          return json({ error: "Invalid comment ID" }, { status: 400 });
        }

        await prisma.comment.delete({ where: { id: commentId } });
        return json({ success: true });
      }
    }

    if (route === "messages") {
      if (method === "DELETE" && pathParts.length === 2) {
        const messageId = parseInt(pathParts[1], 10);
        if (isNaN(messageId)) {
          return json({ error: "Invalid message ID" }, { status: 400 });
        }

        await prisma.message.delete({ where: { id: messageId } });
        return json({ success: true });
      }
    }

    return json({ error: `Method ${method} not allowed on route ${splat}` }, { status: 405 });
  } catch (error: any) {
    console.error(`Action error on ${splat}:`, error);
    return json({ error: error.message || "Failed to execute database write" }, { status: 500 });
  }
}
