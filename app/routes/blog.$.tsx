import { useState, useEffect } from "react";
import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, useSubmit, useActionData, useNavigation } from "@remix-run/react";
import { ArrowLeft, Clock, Calendar, User, Send } from "lucide-react";
import { Grid, Box, Stack, Flex } from "@ninna-ui/layout";
import { Heading, Text, Button } from "@ninna-ui/primitives";
import { Field, Input, Textarea } from "@ninna-ui/forms";
import { prisma } from "~/db.server";

// Default static fallback posts (rendered if not present in DB)
const DEFAULT_POSTS = [
  {
    slug: "net10-apis",
    title: "Building High-Performance APIs in .NET 10 Core",
    date: "May 18, 2026",
    readTime: "6 min read",
    category: "Backend",
    summary: "A deep dive into modular API architectures, modern dependency injection, and leveraging native PL/SQL integrations in the .NET 10 pipeline.",
    content: `
      <p>As software systems scale, the need for performant and modular backend APIs becomes paramount. With the introduction of the .NET 10 runtime, Microsoft has brought substantial upgrades to JIT compiling, Native AOT compilation, and JSON serialization. For developers working with enterprise databases like Oracle and SQL Server, these performance gains are game-changing.</p>
      
      <h3>1. Minimal APIs and Modular Architecture</h3>
      <p>In modern .NET development, Minimal APIs are the preferred choice for microservices due to low memory footprints and faster startup times. Here is how we configure a robust, route-grouped API endpoint in .NET 10:</p>
      
      <pre style="background: #0f131a; border: 1px solid rgba(102, 217, 237, 0.15); border-radius: 6px; padding: 1.25rem; overflow-x: auto; font-family: 'Fira Code', monospace; font-size: 0.85rem; line-height: 1.5; color: #e2e8f0; margin: 1.5rem 0;">
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
 
var app = builder.Build();
 
var claimsGroup = app.MapGroup("/api/v1/claims")
    .WithTags("Claims Engine")
    .RequireAuthorization();
 
claimsGroup.MapPost("/process", async (ClaimRequest request, IClaimService service) => {
    var result = await service.ProcessClaimAsync(request);
    return Results.Ok(result);
});
 
app.Run();
      </pre>

      <h3>2. Direct PL/SQL Optimization</h3>
      <p>For applications communicating with legacy databases (such as Oracle 11g in hospital ERPs), using high-level ORMs like Entity Framework can sometimes introduce unwanted abstraction overhead. Writing optimized PL/SQL procedures and calling them directly through <code>OracleCommand</code> in ADO.NET remains one of the fastest ways to process heavy transactional batch data.</p>
      
      <blockquote style="border-left: 3px solid #66d9ed; background: rgba(102, 217, 237, 0.03); padding: 1rem 1.5rem; margin: 2rem 0; font-style: italic; color: #e2e8f0;">
        Always verify that connections are pooled correctly and database cursors are disposed. In a environment handling thousands of daily claims, even a minor cursor leak can crash an application pool within hours.
      </blockquote>

      <h3>3. Structuring Integrations</h3>
      <p>When bridging hospital tools like Meditech or PeopleSoft with custom web applications, maintaining structured JSON schemas is vital. By leveraging .NET 10's improved System.Text.Json source generators, we can serialize payload structures at compile time, eliminating reflection overhead and maximizing request throughput.</p>
    `
  },
  {
    slug: "agentic-ai-n8n",
    title: "Orchestrating AI Agents and RAG Pipelines in n8n",
    date: "May 04, 2026",
    readTime: "8 min read",
    category: "AI & Automation",
    summary: "How to automate hospital billing reports and system telemetry alerts by linking custom Hermes Agents, vector stores, and n8n webhooks.",
    content: `
      <p>AI is shifting from static chat widgets to active, goal-driven agents. For enterprise developers, the challenge lies in connecting large language models (LLMs) to real-world database procedures, ERP APIs, and notification systems safely. This is where workflow orchestrators like n8n and frameworks like Hermes shine.</p>
      
      <h3>1. What is Agentic AI?</h3>
      <p>Unlike traditional script-driven flows, Agentic systems are given a goal, access to tools, and the autonomy to figure out the steps. For example, instead of writing complex parser rules for variable insurer claims, we can assign an LLM Agent the task: "Retrieve the claim document, search our vector database for matching billing codes, and verify the total matches our SQL database."</p>

      <h3>2. Structuring RAG (Retrieval-Augmented Generation)</h3>
      <p>To prevent models from hallucinating, we implement RAG. The process works as follows:</p>
      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; list-style-type: disc;">
        <li style="margin-bottom: 0.5rem;"><strong>Ingestion:</strong> PDF documents (e.g., insurance claim files) are read and split into text chunks.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Embedding:</strong> Chunks are converted to vector representations and stored in a vector index.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Retrieval:</strong> When a user asks a question, we query the vector store for the most relevant document chunks.</li>
        <li style="margin-bottom: 0.5rem;"><strong>Generation:</strong> The chunks are passed alongside the user query to the LLM to generate an accurate, evidence-backed response.</li>
      </ul>

      <h3>3. n8n Node Configurations</h3>
      <p>n8n is an excellent tool for visually connecting these pieces. We can create webhook triggers that feed incoming emails into a vector search node, pass results to a Hermes Agent node to decide on actions, and subsequently call .NET webhooks to write records directly to the SQL Server database.</p>
    `
  },
  {
    slug: "nicvd-erp-migration",
    title: "Building In-House ERP Solutions for Cardiac Hospitals",
    date: "April 22, 2026",
    readTime: "5 min read",
    category: "Healthcare",
    summary: "An architectural retrospective on developing CATH XP and customized HMS modules to eliminate high licensing costs and improve patient flow.",
    content: `
      <p>Operating a high-volume healthcare facility requires seamless coordination between clinical diagnostics, patient admissions, billing, and inventory tracking. At NICVD, the largest cardiac hospital in Pakistan, relying on generic third-party software often meant high licensing fees and lack of flexibility. Our solution was to build custom clinical systems from the ground up.</p>

      <h3>1. The CATH XP Architecture</h3>
      <p>CATH XP was designed specifically for catheterization laboratory tracking. Built using a robust .NET framework combined with SQL Server, it captures real-time surgical data, tracks medical stents in inventory, and automatically formats surgical summary reports for surgeons.</p>

      <h3>2. Tackling the Admissions Bottleneck</h3>
      <p>Hospital management systems often bottleneck during emergency admissions. We re-engineered the routing pipeline using direct WinForms and custom PL/SQL queries to allow rapid one-click registration of emergency patients, syncing their data automatically with lab dashboards and financial accounts.</p>

      <h3>3. Lessons Learned</h3>
      <p>Building in-house software for medical environments requires close cooperation with the medical staff. By running iterative requirements gathering sessions and testing UI modules directly in the operating rooms, we ensured the final application was optimized for speed, reliability, and ease of use under pressure.</p>
    `
  }
];

const renderBlogImage = (category: string) => {
  if (category.includes("Backend")) {
    return (
      <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blog-back" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(102, 217, 237, 0.02)" />
            <stop offset="100%" stopColor="rgba(102, 217, 237, 0.12)" />
          </linearGradient>
        </defs>
        <rect width="400" height="140" fill="url(#blog-back)" />
        <rect x="50" y="30" width="300" height="80" rx="4" stroke="rgba(102, 217, 237, 0.2)" strokeWidth="1.5" fill="rgba(16,23,33,0.8)" />
        <circle cx="70" cy="45" r="4" fill="#ff5f56" />
        <circle cx="82" cy="45" r="4" fill="#ffbd2e" />
        <circle cx="94" cy="45" r="4" fill="#27c93f" />
        <path d="M 70,70 L 150,70" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 70,85 L 110,85" stroke="rgba(102, 217, 237, 0.4)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (category.includes("Automation") || category.includes("AI")) {
    return (
      <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blog-ai" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(102, 217, 237, 0.02)" />
            <stop offset="100%" stopColor="rgba(102, 217, 237, 0.12)" />
          </linearGradient>
        </defs>
        <rect width="400" height="140" fill="url(#blog-ai)" />
        <circle cx="200" cy="70" r="30" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="160" cy="70" r="4" fill="var(--accent)" />
        <circle cx="240" cy="70" r="4" fill="var(--accent)" />
        <circle cx="200" cy="40" r="4" fill="var(--accent)" />
        <circle cx="200" cy="100" r="4" fill="var(--accent)" />
        <line x1="164" y1="70" x2="196" y2="70" stroke="rgba(102, 217, 237, 0.3)" strokeWidth="1" />
        <line x1="204" y1="70" x2="236" y2="70" stroke="rgba(102, 217, 237, 0.3)" strokeWidth="1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="blog-hc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(102, 217, 237, 0.02)" />
          <stop offset="100%" stopColor="rgba(102, 217, 237, 0.12)" />
        </linearGradient>
      </defs>
      <rect width="400" height="140" fill="url(#blog-hc)" />
      <path d="M 60,70 L 140,70 L 150,50 L 160,95 L 170,60 L 180,80 L 190,70 L 340,70" 
            stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export async function loader({ params }: LoaderFunctionArgs) {
  const splat = params["*"] || "";

  // 1. Fetch published blogs from DB
  let dbBlogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" }
  });

  // Merge static posts if not exists in DB
  const mergedBlogs = [...dbBlogs.map(b => ({
    id: b.slug,
    slug: b.slug,
    dbId: b.id,
    title: b.title,
    date: new Date(b.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    readTime: b.readTime,
    summary: b.summary || "",
    category: b.category,
    content: b.content
  }))];

  // If a specific blog is requested
  if (splat) {
    let activePost = mergedBlogs.find(b => b.slug === splat);

    // If not found in DB, check fallback static posts
    if (!activePost) {
      const fallbackPost = DEFAULT_POSTS.find(p => p.slug === splat);
      if (fallbackPost) {
        activePost = {
          id: fallbackPost.slug,
          slug: fallbackPost.slug,
          dbId: 0, // indicates static
          title: fallbackPost.title,
          date: fallbackPost.date,
          readTime: fallbackPost.readTime,
          summary: fallbackPost.summary,
          category: fallbackPost.category,
          content: fallbackPost.content
        };
      }
    }

    if (!activePost) {
      throw new Response("Blog Post Not Found", { status: 404 });
    }

    // Load comments from DB (even for static posts, dynamically matched by slug)
    let comments = await prisma.comment.findMany({
      where: {
        approved: true,
        blog: {
          slug: splat
        }
      },
      orderBy: { createdAt: "asc" }
    });

    return json({
      activePost,
      comments: comments.map(c => ({
        id: c.id,
        authorName: c.authorName,
        content: c.content,
        createdAt: c.createdAt.toISOString()
      })),
      posts: mergedBlogs
    });
  }

  // Load static ones if DB is completely empty for the list view
  const finalList = mergedBlogs.length > 0 ? mergedBlogs : DEFAULT_POSTS.map(p => ({
    id: p.slug,
    slug: p.slug,
    dbId: 0,
    title: p.title,
    date: p.date,
    readTime: p.readTime,
    summary: p.summary,
    category: p.category,
    content: p.content
  }));

  return json({
    activePost: null,
    comments: [],
    posts: finalList
  });
}

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const authorName = formData.get("authorName") as string;
  const content = formData.get("content") as string;
  const slug = params["*"];

  if (!authorName || !content || !slug) {
    return json({ success: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    // 1. Ensure the Blog entry exists in DB so we can link the comment
    let dbBlog = await prisma.blog.findUnique({
      where: { slug }
    });

    if (!dbBlog) {
      // Find fallback data
      const fallback = DEFAULT_POSTS.find(p => p.slug === slug);
      dbBlog = await prisma.blog.create({
        data: {
          slug,
          title: fallback?.title || slug,
          content: fallback?.content || "",
          summary: fallback?.summary || "",
          category: fallback?.category || "Backend",
          readTime: fallback?.readTime || "5 min read",
          published: true
        }
      });
    }

    // 2. Create the comment
    await prisma.comment.create({
      data: {
        authorName,
        authorEmail: "anonymous@baqar.dev",
        content,
        blogId: dbBlog.id,
        approved: false // starts as unapproved for safety
      }
    });

    return json({ success: true });
  } catch (err: any) {
    console.error("Comment submit error:", err);
    return json({ success: false, error: err.message || "Failed to commit comment" }, { status: 500 });
  }
}

export default function BlogRoute() {
  const { activePost, comments, posts } = useLoaderData<typeof loader>();
  const submit = useSubmit();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();

  const [commentForm, setCommentForm] = useState({ author: "", content: "" });
  const [commentStatus, setCommentStatus] = useState<string | null>(null);

  useEffect(() => {
    if ((actionData as any)?.success) {
      setCommentStatus("success");
      setCommentForm({ author: "", content: "" });
      const timer = setTimeout(() => setCommentStatus(null), 5000);
      return () => clearTimeout(timer);
    } else if ((actionData as any)?.error) {
      setCommentStatus("error");
      const timer = setTimeout(() => setCommentStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [actionData]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.author.trim() || !commentForm.content.trim()) return;

    setCommentStatus("sending");
    submit(
      {
        authorName: commentForm.author,
        content: commentForm.content
      },
      { method: "post" }
    );
  };

  const isSending = navigation.state === "submitting";

  return (
    <section className="blog-section pt-32 pb-16" id="blog">
      <div className="container mx-auto px-6">
        {!activePost ? (
          <>
            <Flex align="center" gap="4" className="section-title-wrapper mb-8 animate-fade-in">
              <span className="section-number font-mono text-cyan-400">// 05</span>
              <h2 className="section-title text-3xl font-bold text-slate-100">Developer Blog</h2>
            </Flex>

            <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="8" className="blog-grid">
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="glass-card blog-card flex flex-col justify-between overflow-hidden rounded-lg bg-[rgba(16,23,33,0.8)] border border-[rgba(102,217,237,0.15)] shadow-lg group hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    window.location.href = `/blog/${post.slug}`;
                  }}
                >
                  <div className="blog-image-wrapper h-36 flex items-center justify-center border-b border-[rgba(102,217,237,0.15)] overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950">
                    <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                      {renderBlogImage(post.category)}
                    </div>
                  </div>
                  <Stack gap="4" className="blog-card-content p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <Flex justify="between" align="center" className="blog-card-meta font-mono text-xs mb-3">
                        <span className="blog-category text-cyan-400 font-semibold uppercase">{post.category}</span>
                        <span className="blog-date text-slate-500 flex items-center gap-1.5">
                          <Calendar size={12} /> {post.date}
                        </span>
                      </Flex>
                      <h3 className="blog-card-title text-lg font-bold text-slate-100 mb-2 leading-snug group-hover:text-cyan-400 transition-colors duration-200">{post.title}</h3>
                      <p className="blog-card-summary text-slate-400 text-sm leading-relaxed mb-6">{post.summary}</p>
                    </div>
                    <Flex justify="between" align="center" className="blog-card-footer font-mono text-xs text-slate-500 pt-4 border-t border-[rgba(102,217,237,0.08)]">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> {post.readTime}
                      </span>
                      <span className="read-more text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform duration-200">Read article ➔</span>
                    </Flex>
                  </Stack>
                </article>
              ))}
            </Grid>
          </>
        ) : (
          <div className="blog-post-view max-w-3xl mx-auto animate-fade-in">
            <button 
              className="btn-secondary px-4 py-2 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 rounded flex items-center gap-2 mb-8 cursor-pointer transition-all duration-300"
              onClick={() => {
                window.location.href = "/blog";
              }}
            >
              <ArrowLeft size={16} /> Back to Blog
            </button>

            <article className="post-article mb-12">
              <header className="post-header mb-8">
                <span className="post-category-badge font-mono text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded inline-block mb-3">{activePost.category}</span>
                <h1 className="post-title text-3xl sm:text-5xl font-bold text-slate-100 leading-tight mb-4">{activePost.title}</h1>
                <Flex gap="6" wrap="wrap" className="post-meta font-mono text-xs text-slate-500 pb-6 border-b border-slate-800">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {activePost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={13} /> By Baqar Naqvi
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {activePost.readTime}
                  </span>
                </Flex>
              </header>

              <div 
                className="post-body text-slate-300 leading-relaxed text-base sm:text-lg space-y-6"
                dangerouslySetInnerHTML={{ __html: activePost.content }}
              />
            </article>

            {/* Comments Section */}
            <Box className="comments-section-wrapper p-6 sm:p-8 rounded-lg bg-[rgba(16,23,33,0.8)] border border-[rgba(102,217,237,0.15)] shadow-lg">
              <h3 className="comments-section-title font-mono text-cyan-400 text-lg uppercase tracking-wider mb-6 pb-2 border-b border-slate-800">// DISCUSSIONS ({comments.length})</h3>
              
              {comments.length === 0 ? (
                <div className="no-comments font-mono text-sm text-slate-500 text-center py-6">NO_COMMENTS_SUBMITTED_YET. BE_THE_FIRST.</div>
              ) : (
                <Stack gap="4" className="comments-list mb-8">
                  {comments.map((comment) => (
                    <Box key={comment.id} className="comment-item p-4 rounded bg-slate-950/40 border border-[rgba(102,217,237,0.08)]">
                      <Flex justify="between" align="center" className="comment-header text-xs text-slate-500 mb-2">
                        <span className="comment-author text-cyan-400 font-bold">{comment.authorName}</span>
                        <span className="comment-date font-mono">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </Flex>
                      <p className="comment-content text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{comment.content}</p>
                    </Box>
                  ))}
                </Stack>
              )}

              {/* Comment submission form */}
              <Box className="comment-form-container pt-8 border-t border-slate-800">
                <h4 className="comment-form-title font-mono text-sm text-slate-200 mb-4 uppercase">ADD_COMMENT_ENTRY</h4>
                
                {commentStatus === "success" && (
                  <div className="comment-status-msg success font-mono text-xs p-3 rounded mb-4 bg-green-500/10 border border-green-500/25 text-green-400">
                    ✓ COMMENT_PENDING_COMMIT: Message received and sent to moderator pool.
                  </div>
                )}
                {commentStatus === "error" && (
                  <div className="comment-status-msg error font-mono text-xs p-3 rounded mb-4 bg-red-500/10 border border-red-500/25 text-red-400">
                    ⚠ TRANSMISSION_FAILED: Error occurred during comment sync.
                  </div>
                )}

                <form onSubmit={handleCommentSubmit} className="comment-form flex flex-col gap-5">
                  <Field label="HANDLE / NAME" required errorText="Handle name is required">
                    <Input
                      type="text"
                      id="comment-author"
                      value={commentForm.author}
                      onChange={(e) => setCommentForm(prev => ({ ...prev, author: e.target.value }))}
                      required
                      placeholder="Anonymouse"
                      fullWidth
                    />
                  </Field>

                  <Field label="COMMENT_PAYLOAD" required errorText="Comment is required">
                    <Textarea
                      id="comment-content"
                      value={commentForm.content}
                      onChange={(e) => setCommentForm(prev => ({ ...prev, content: e.target.value }))}
                      required
                      rows={4}
                      placeholder="Write your constructive thoughts here..."
                      fullWidth
                    />
                  </Field>

                  <Button 
                    type="submit" 
                    variant="solid" 
                    color="primary"
                    loading={isSending || commentStatus === "sending"}
                    rightIcon={<Send size={14} />}
                    className="self-start font-mono text-xs cursor-pointer"
                  >
                    COMMIT_COMMENT
                  </Button>
                </form>
              </Box>
            </Box>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }} />
    </section>
  );
}
