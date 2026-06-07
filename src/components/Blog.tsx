import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, User, Send } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  category: string;
  content: React.ReactNode | string;
}

interface CommentItem {
  id?: string;
  _id?: string;
  author: string;
  content: string;
  date?: string;
  createdAt?: string;
  approved?: boolean;
}

const renderBlogImage = (category: string) => {
  if (category.includes('Backend')) {
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
        <path d="M 70,70 L 150,70" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 70,85 L 110,85" stroke="rgba(102, 217, 237, 0.4)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (category.includes('Automation') || category.includes('AI')) {
    return (
      <svg viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blog-ai" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(102, 217, 237, 0.02)" />
            <stop offset="100%" stopColor="rgba(102, 217, 237, 0.12)" />
          </linearGradient>
        </defs>
        <rect width="400" height="140" fill="url(#blog-ai)" />
        <circle cx="200" cy="70" r="30" stroke="var(--accent-color)" strokeWidth="1" strokeDasharray="4,4" />
        <circle cx="160" cy="70" r="4" fill="var(--accent-color)" />
        <circle cx="240" cy="70" r="4" fill="var(--accent-color)" />
        <circle cx="200" cy="40" r="4" fill="var(--accent-color)" />
        <circle cx="200" cy="100" r="4" fill="var(--accent-color)" />
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
            stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const Blog: React.FC = () => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Comments State
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(false);
  const [commentForm, setCommentForm] = useState({ author: '', content: '' });
  const [commentStatus, setCommentStatus] = useState<string | null>(null);

  const defaultPosts: BlogPost[] = [
    {
      id: 'net10-apis',
      title: 'Building High-Performance APIs in .NET 10 Core',
      date: 'May 18, 2026',
      readTime: '6 min read',
      category: 'Backend',
      summary: 'A deep dive into modular API architectures, modern dependency injection, and leveraging native PL/SQL integrations in the .NET 10 pipeline.',
      content: (
        <>
          <p>As software systems scale, the need for performant and modular backend APIs becomes paramount. With the introduction of the .NET 10 runtime, Microsoft has brought substantial upgrades to JIT compiling, Native AOT compilation, and JSON serialization. For developers working with enterprise databases like Oracle and SQL Server, these performance gains are game-changing.</p>
          
          <h3>1. Minimal APIs and Modular Architecture</h3>
          <p>In modern .NET development, Minimal APIs are the preferred choice for microservices due to low memory footprints and faster startup times. Here is how we configure a robust, route-grouped API endpoint in .NET 10:</p>
          
          <pre className="code-block font-mono">
{`var builder = WebApplication.CreateBuilder(args);
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
 
app.Run();`}
          </pre>

          <h3>2. Direct PL/SQL Optimization</h3>
          <p>For applications communicating with legacy databases (such as Oracle 11g in hospital ERPs), using high-level ORMs like Entity Framework can sometimes introduce unwanted abstraction overhead. Writing optimized PL/SQL procedures and calling them directly through `OracleCommand` in ADO.NET remains one of the fastest ways to process heavy transactional batch data.</p>
          
          <blockquote>
            Always verify that connections are pooled correctly and database cursors are disposed. In a environment handling thousands of daily claims, even a minor cursor leak can crash an application pool within hours.
          </blockquote>

          <h3>3. Structuring Integrations</h3>
          <p>When bridging hospital tools like Meditech or PeopleSoft with custom web applications, maintaining structured JSON schemas is vital. By leveraging .NET 10's improved System.Text.Json source generators, we can serialize payload structures at compile time, eliminating reflection overhead and maximizing request throughput.</p>
        </>
      )
    },
    {
      id: 'agentic-ai-n8n',
      title: 'Orchestrating AI Agents and RAG Pipelines in n8n',
      date: 'May 04, 2026',
      readTime: '8 min read',
      category: 'AI & Automation',
      summary: 'How to automate hospital billing reports and system telemetry alerts by linking custom Hermes Agents, vector stores, and n8n webhooks.',
      content: (
        <>
          <p>AI is shifting from static chat widgets to active, goal-driven agents. For enterprise developers, the challenge lies in connecting large language models (LLMs) to real-world database procedures, ERP APIs, and notification systems safely. This is where workflow orchestrators like n8n and frameworks like Hermes shine.</p>
          
          <h3>1. What is Agentic AI?</h3>
          <p>Unlike traditional script-driven flows, Agentic systems are given a goal, access to tools, and the autonomy to figure out the steps. For example, instead of writing complex parser rules for variable insurer claims, we can assign an LLM Agent the task: "Retrieve the claim document, search our vector database for matching billing codes, and verify the total matches our SQL database."</p>

          <h3>2. Structuring RAG (Retrieval-Augmented Generation)</h3>
          <p>To prevent models from hallucinating, we implement RAG. The process works as follows:</p>
          <ul>
            <li><strong>Ingestion:</strong> PDF documents (e.g., insurance claim files) are read and split into text chunks.</li>
            <li><strong>Embedding:</strong> Chunks are converted to vector representations and stored in a vector index.</li>
            <li><strong>Retrieval:</strong> When a user asks a question, we query the vector store for the most relevant document chunks.</li>
            <li><strong>Generation:</strong> The chunks are passed alongside the user query to the LLM to generate an accurate, evidence-backed response.</li>
          </ul>

          <h3>3. n8n Node Configurations</h3>
          <p>n8n is an excellent tool for visually connecting these pieces. We can create webhook triggers that feed incoming emails into a vector search node, pass results to a Hermes Agent node to decide on actions, and subsequently call .NET webhooks to write records directly to the SQL Server database.</p>
        </>
      )
    },
    {
      id: 'nicvd-erp-migration',
      title: 'Building In-House ERP Solutions for Cardiac Hospitals',
      date: 'April 22, 2026',
      readTime: '5 min read',
      category: 'Healthcare',
      summary: 'An architectural retrospective on developing CATH XP and customized HMS modules to eliminate high licensing costs and improve patient flow.',
      content: (
        <>
          <p>Operating a high-volume healthcare facility requires seamless coordination between clinical diagnostics, patient admissions, billing, and inventory tracking. At NICVD, the largest cardiac hospital in Pakistan, relying on generic third-party software often meant high licensing fees and lack of flexibility. Our solution was to build custom clinical systems from the ground up.</p>

          <h3>1. The CATH XP Architecture</h3>
          <p>CATH XP was designed specifically for catheterization laboratory tracking. Built using a robust .NET framework combined with SQL Server, it captures real-time surgical data, tracks medical stents in inventory, and automatically formats surgical summary reports for surgeons.</p>

          <h3>2. Tackling the Admissions Bottleneck</h3>
          <p>Hospital management systems often bottleneck during emergency admissions. We re-engineered the routing pipeline using direct WinForms and custom PL/SQL queries to allow rapid one-click registration of emergency patients, syncing their data automatically with lab dashboards and financial accounts.</p>

          <h3>3. Lessons Learned</h3>
          <p>Building in-house software for medical environments requires close cooperation with the medical staff. By running iterative requirements gathering sessions and testing UI modules directly in the operating rooms, we ensured the final application was optimized for speed, reliability, and ease of use under pressure.</p>
        </>
      )
    }
  ];

  // Fetch blogs from API
  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => {
        if (!res.ok) throw new Error('API Error or Empty');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((b: any) => ({
            id: b.id || b._id || b.slug,
            title: b.title,
            date: b.date || new Date(b.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            readTime: b.readTime,
            summary: b.summary,
            category: b.category,
            content: b.content
          }));
          setPosts(mapped);
        } else {
          setPosts(defaultPosts);
        }
      })
      .catch((err) => {
        console.warn('Backend blogs fetch failed, falling back to static posts:', err);
        setPosts(defaultPosts);
      })
      .finally(() => setLoading(false));
  }, []);

  // Fetch comments for active post
  useEffect(() => {
    if (!selectedPostId) {
      setComments([]);
      return;
    }

    setCommentsLoading(true);
    fetch(`/api/blogs/${selectedPostId}/comments`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch comments');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setComments(data);
        }
      })
      .catch((err) => console.error('Error fetching comments:', err))
      .finally(() => setCommentsLoading(false));
  }, [selectedPostId]);

  // Handle comment submit
  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.author.trim() || !commentForm.content.trim() || !selectedPostId) return;

    setCommentStatus('sending');
    try {
      const res = await fetch(`/api/blogs/${selectedPostId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          authorName: commentForm.author,
          authorEmail: 'anonymous@baqar.dev',
          content: commentForm.content
        })
      });

      if (res.ok) {
        setCommentStatus('success');
        setCommentForm({ author: '', content: '' });
        setTimeout(() => setCommentStatus(null), 5000);
      } else {
        setCommentStatus('error');
      }
    } catch (err) {
      console.error(err);
      setCommentStatus('error');
    }
  };

  const activePost = posts.find(p => p.id === selectedPostId);

  return (
    <section className="blog-section" id="blog">
      <div className="container">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">LOADING_BLOG_SYSTEM...</div>
          </div>
        ) : !activePost ? (
          <>
            <div className="section-title-wrapper animate-fade-in">
              <span className="section-number">// 05</span>
              <h2 className="section-title">Developer Blog</h2>
            </div>

            <div className="blog-grid">
              {posts.map((post) => (
                <article key={post.id} className="glass-card blog-card" onClick={() => setSelectedPostId(post.id)}>
                  <div className="blog-image-wrapper">
                    {renderBlogImage(post.category)}
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta font-mono">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">
                        <Calendar size={12} style={{ marginRight: '0.3rem' }} /> {post.date}
                      </span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-summary">{post.summary}</p>
                    <div className="blog-card-footer font-mono">
                      <span>
                        <Clock size={12} style={{ marginRight: '0.3rem' }} /> {post.readTime}
                      </span>
                      <span className="read-more">Read article ➔</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="blog-post-view animate-fade-in">
            <button className="btn-secondary back-btn" onClick={() => setSelectedPostId(null)}>
              <ArrowLeft size={16} /> Back to Blog
            </button>

            <article className="post-article">
              <header className="post-header">
                <span className="post-category-badge font-mono">{activePost.category}</span>
                <h1 className="post-title">{activePost.title}</h1>
                <div className="post-meta font-mono">
                  <span>
                    <Calendar size={13} style={{ marginRight: '0.4rem' }} /> {activePost.date}
                  </span>
                  <span>
                    <User size={13} style={{ marginRight: '0.4rem' }} /> By Baqar Naqvi
                  </span>
                  <span>
                    <Clock size={13} style={{ marginRight: '0.4rem' }} /> {activePost.readTime}
                  </span>
                </div>
              </header>

              <div className="post-body">
                {typeof activePost.content === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: activePost.content }} />
                ) : (
                  activePost.content
                )}
              </div>
            </article>

            {/* Comments Section */}
            <div className="comments-section-wrapper glass-card">
              <h3 className="comments-section-title font-mono">// DISCUSSIONS ({comments.length})</h3>
              
              {commentsLoading ? (
                <div className="comments-loading font-mono">QUERYING_DATABASE_COMMENTS...</div>
              ) : comments.length === 0 ? (
                <div className="no-comments font-mono">NO_COMMENTS_SUBMITTED_YET. BE_THE_FIRST.</div>
              ) : (
                <div className="comments-list">
                  {comments.map((comment) => (
                    <div key={comment.id || comment._id} className="comment-item">
                      <div className="comment-header">
                        <span className="comment-author">{comment.author}</span>
                        {comment.date || comment.createdAt ? (
                          <span className="comment-date">
                            {new Date(comment.date || comment.createdAt || '').toLocaleDateString()}
                          </span>
                        ) : null}
                      </div>
                      <p className="comment-content">{comment.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Comment submission form */}
              <div className="comment-form-container">
                <h4 className="comment-form-title font-mono">ADD_COMMENT_ENTRY</h4>
                
                {commentStatus === 'success' && (
                  <div className="comment-status-msg success font-mono">
                    ✓ COMMENT_PENDING_COMMIT: Message received and sent to moderator pool.
                  </div>
                )}
                {commentStatus === 'error' && (
                  <div className="comment-status-msg error font-mono">
                    ⚠ TRANSMISSION_FAILED: Error occurred during comment sync.
                  </div>
                )}

                <form onSubmit={handleCommentSubmit} className="comment-form">
                  <div className="form-group">
                    <label htmlFor="comment-author" className="font-mono">HANDLE / NAME</label>
                    <input
                      type="text"
                      id="comment-author"
                      value={commentForm.author}
                      onChange={(e) => setCommentForm(prev => ({ ...prev, author: e.target.value }))}
                      required
                      placeholder="Anonymouse"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="comment-content" className="font-mono">COMMENT_PAYLOAD</label>
                    <textarea
                      id="comment-content"
                      value={commentForm.content}
                      onChange={(e) => setCommentForm(prev => ({ ...prev, content: e.target.value }))}
                      required
                      rows={4}
                      placeholder="Write your constructive thoughts here..."
                      className="form-input"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary comment-submit-btn font-mono" 
                    disabled={commentStatus === 'sending'}
                  >
                    {commentStatus === 'sending' ? (
                      'TRANSMITTING...'
                    ) : (
                      <>COMMIT_COMMENT <Send size={14} style={{ marginLeft: '0.4rem' }} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .blog-section {
          position: relative;
        }
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8rem 0;
          gap: 1.5rem;
        }
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid rgba(102, 217, 237, 0.1);
          border-top-color: var(--accent-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          box-shadow: 0 0 20px rgba(102, 217, 237, 0.15);
        }
        .loading-text {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--accent-color);
          letter-spacing: 0.15em;
          animation: pulse 1.5s ease-in-out infinite;
          text-shadow: 0 0 8px var(--accent-glow);
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .blog-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          cursor: pointer;
          transition: var(--transition-smooth);
          padding: 0;
          overflow: hidden;
        }
        .blog-card:hover {
          transform: translateY(-4px);
        }
        .blog-image-wrapper {
          height: 140px;
          background: linear-gradient(135deg, rgba(16, 23, 33, 0.9) 0%, rgba(7, 9, 14, 0.9) 100%);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .blog-image-wrapper svg {
          width: 100%;
          height: 100%;
          transition: transform 0.5s ease;
        }
        .blog-card:hover .blog-image-wrapper svg {
          transform: scale(1.05);
        }
        .blog-card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: space-between;
        }
        .blog-card-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }
        .blog-category {
          color: var(--accent-color);
          font-weight: 500;
        }
        .blog-date {
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
        }
        .blog-card-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .blog-card-summary {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .blog-card-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
        }
        .blog-card-footer span {
          display: inline-flex;
          align-items: center;
        }
        .read-more {
          color: var(--accent-color);
          font-weight: 500;
          transition: var(--transition-fast);
        }
        .blog-card:hover .read-more {
          transform: translateX(4px);
        }

        /* Post Article View Styling */
        .blog-post-view {
          max-width: 800px;
          margin: 0 auto;
        }
        .back-btn {
          margin-bottom: 2.5rem;
        }
        .post-category-badge {
          display: inline-block;
          font-size: 0.75rem;
          background: rgba(var(--accent-rgb), 0.08);
          border: 1px solid rgba(var(--accent-rgb), 0.2);
          color: var(--accent-color);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .post-title {
          font-size: 2.75rem;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          line-height: 1.2;
        }
        .post-meta {
          display: flex;
          gap: 2rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .post-meta span {
          display: inline-flex;
          align-items: center;
        }
        .post-body {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .post-body p {
          margin-bottom: 1.5rem;
        }
        .post-body h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .post-body ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .post-body li {
          margin-bottom: 0.5rem;
        }
        .post-body blockquote {
          border-left: 3px solid var(--accent-color);
          background: rgba(var(--accent-rgb), 0.03);
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: var(--text-primary);
        }
        .code-block {
          background: #0f131a;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 1.25rem;
          overflow-x: auto;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #e2e8f0;
          margin: 1.5rem 0;
        }

        /* Comments styling */
        .comments-section-wrapper {
          margin-top: 3.5rem;
          padding: 2.5rem;
          border-color: rgba(102, 217, 237, 0.12);
        }
        .comments-section-title {
          font-size: 1.4rem;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
        }
        .comments-loading {
          font-size: 0.8rem;
          color: var(--text-muted);
          padding: 1.5rem 0;
          text-align: center;
        }
        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        .comment-item {
          padding: 1.25rem;
          background: rgba(7, 9, 14, 0.4);
          border: 1px solid var(--border-color);
          border-radius: 6px;
        }
        .comment-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        .comment-author {
          color: var(--accent-color);
          font-weight: 600;
        }
        .comment-date {
          font-family: var(--font-mono);
        }
        .comment-content {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.4;
          white-space: pre-wrap;
        }
        .no-comments {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-align: center;
          padding: 1.5rem 0;
        }
        .comment-form-container {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
        }
        .comment-form-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }
        .comment-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .comment-submit-btn {
          align-self: flex-start;
        }
        .comment-status-msg {
          font-size: 0.8rem;
          padding: 0.75rem;
          border-radius: 6px;
          margin-bottom: 1.25rem;
        }
        .comment-status-msg.success {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.25);
          color: #4ade80;
        }
        .comment-status-msg.error {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #f87171;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-group label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          letter-spacing: 0.05em;
        }
        .form-input {
          background: rgba(7, 9, 14, 0.5);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--accent-color);
          box-shadow: 0 0 10px var(--accent-glow);
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .post-title {
            font-size: 2rem;
          }
          .post-meta {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
