import React, { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { 
  Lock, 
  BarChart2, 
  MessageSquare, 
  FileText, 
  CheckSquare, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Check, 
  ArrowLeft,
  Calendar,
  Clock,
  RefreshCw,
  ExternalLink
} from "lucide-react";
import { Grid, Box, Stack, Flex } from "@ninna-ui/layout";

interface BlogPost {
  id?: number;
  dbId?: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  readTime: string;
  date?: string;
  tags?: string;
  keyTakeaways?: string;
  published?: boolean;
}

interface CommentItem {
  id: number;
  blogId?: number;
  postSlug?: string;
  authorName: string;
  content: string;
  approved: boolean;
  createdAt: string;
}

interface MessageItem {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface VisitorStats {
  totalVisits: number;
  uniqueVisitors: number;
  pageViews: Array<{ page: string; _count: { page: number } }>;
  recentVisits: Array<{ id: number; page: string; ip: string | null; userAgent: string | null; timestamp: string }>;
}

export const AdminConsole: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"stats" | "blogs" | "comments" | "inbox">("stats");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Stats State
  const [stats, setStats] = useState<VisitorStats | null>(null);

  // Blogs State
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState<BlogPost>({
    title: "",
    slug: "",
    summary: "",
    content: "",
    category: "Backend",
    readTime: "5 min read",
    tags: "",
    keyTakeaways: "",
    published: false
  });

  // Comments State
  const [comments, setComments] = useState<CommentItem[]>([]);

  // Inbox Messages State
  const [messages, setMessages] = useState<MessageItem[]>([]);

  useEffect(() => {
    const adminToken = sessionStorage.getItem("adminToken");
    if (adminToken) {
      setToken(adminToken);
      setIsAuthenticated(true);
    }
  }, []);

  const getAuthHeaders = () => {
    return {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    };
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        sessionStorage.setItem("adminToken", data.token);
        setToken(data.token);
        setIsAuthenticated(true);
      } else {
        setError(data.error || "Authentication failed. Incorrect password.");
      }
    } catch (err) {
      console.error(err);
      setError("Connection failed. Make sure the database and API are online.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminToken");
    setToken(null);
    setIsAuthenticated(false);
  };

  // Fetch Stats Data
  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/stats", {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Blogs Data
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/admin/blogs", {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  // Fetch Comments Data
  const fetchComments = async () => {
    try {
      const res = await fetch("/api/admin/comments", {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  // Fetch Inbox Messages Data
  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/admin/messages", {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
    }
  };

  // Load active tab data
  useEffect(() => {
    if (!isAuthenticated) return;
    
    if (activeTab === "stats") {
      fetchStats();
    } else if (activeTab === "blogs") {
      fetchBlogs();
    } else if (activeTab === "comments") {
      fetchComments();
    } else if (activeTab === "inbox") {
      fetchMessages();
    }
  }, [isAuthenticated, activeTab, token]);

  // Handle Blog Post CRUD
  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const isEdit = !!editingBlog;
    const blogId = editingBlog?.id;
    const url = isEdit ? `/api/admin/blogs/${blogId}` : "/api/admin/blogs";
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: JSON.stringify(blogForm)
      });

      if (res.ok) {
        setShowBlogForm(false);
        setEditingBlog(null);
        setBlogForm({
          title: "",
          slug: "",
          summary: "",
          content: "",
          category: "Backend",
          readTime: "5 min read",
          tags: "",
          keyTakeaways: "",
          published: false
        });
        fetchBlogs();
      } else {
        const data = await res.json();
        setError(data.error || "Failed to save blog post.");
      }
    } catch (err) {
      console.error(err);
      setError("Connection failed. Could not save blog post.");
    } finally {
      setLoading(false);
    }
  };

  const handleBlogEditInit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setBlogForm({
      title: blog.title,
      slug: blog.slug,
      summary: blog.summary,
      content: blog.content,
      category: blog.category,
      readTime: blog.readTime,
      tags: blog.tags || "",
      keyTakeaways: blog.keyTakeaways || "",
      published: blog.published ?? false
    });
    setShowBlogForm(true);
  };

  const handleBlogDelete = async (blog: BlogPost) => {
    if (!window.confirm(`Are you sure you want to delete "${blog.title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/blogs/${blog.id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
      });

      if (res.ok) {
        fetchBlogs();
      } else {
        alert("Failed to delete blog post.");
      }
    } catch (err) {
      console.error(err);
      alert("Connection failed. Could not delete blog post.");
    }
  };

  // Handle Comment Moderator Actions
  const handleCommentApprove = async (comment: CommentItem) => {
    try {
      const res = await fetch(`/api/admin/comments/${comment.id}/approve`, {
        method: "PUT",
        headers: getAuthHeaders()
      });

      if (res.ok) {
        fetchComments();
      } else {
        alert("Failed to approve comment.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to comment approval endpoint.");
    }
  };

  const handleCommentDelete = async (comment: CommentItem) => {
    if (!window.confirm("Delete this comment permanently?")) return;

    try {
      const res = await fetch(`/api/admin/comments/${comment.id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
      });

      if (res.ok) {
        fetchComments();
      } else {
        alert("Failed to delete comment.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to comment deletion endpoint.");
    }
  };

  // Handle Message Actions
  const handleMessageDelete = async (message: MessageItem) => {
    if (!window.confirm("Delete this message permanently?")) return;

    try {
      const res = await fetch(`/api/admin/messages/${message.id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
      });

      if (res.ok) {
        fetchMessages();
      } else {
        alert("Failed to delete message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to message deletion endpoint.");
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setBlogForm(prev => ({
      ...prev,
      title: val,
      slug: generateSlug(val)
    }));
  };

  if (!isAuthenticated) {
    return (
      <section className="admin-login-section flex items-center justify-center pt-32 pb-16 min-h-[80vh]">
        <div className="container max-w-md flex flex-col gap-6 px-6">
          <button className="btn-secondary font-mono w-fit px-4 py-2 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 rounded flex items-center gap-2 cursor-pointer transition-colors duration-200" onClick={() => navigate("/")}>
            <ArrowLeft size={14} /> BACK_TO_HOME
          </button>
          
          <Box className="glass-card login-card p-8 rounded-lg bg-[rgba(16,23,33,0.8)] border border-[rgba(102,217,237,0.15)] shadow-2xl">
            <div className="login-header text-center mb-8">
              <div className="lock-icon-container w-16 h-16 rounded-full bg-cyan-400/5 border border-cyan-400/25 text-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(102,217,237,0.1)]">
                <Lock size={28} />
              </div>
              <h2 className="login-title font-mono text-xl text-slate-100 tracking-wider">ADMIN_GATEWAY</h2>
              <p className="login-subtitle text-xs text-slate-500 mt-1">Provide security token to authenticate session.</p>
            </div>

            <form onSubmit={handleLogin} className="login-form flex flex-col gap-4">
              {error && <div className="form-error bg-red-500/10 border border-red-500/25 text-red-400 font-mono text-xs p-3 rounded text-center">{error}</div>}
              
              <Stack gap="2" className="form-group">
                <label htmlFor="gatekeeper-password" className="font-mono text-xs text-slate-400">ACCESS_PASSWORD</label>
                <input
                  type="password"
                  id="gatekeeper-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••••"
                  className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-center text-slate-100 text-sm outline-none font-mono"
                  required
                  autoFocus
                />
              </Stack>

              <button 
                type="submit" 
                className="btn-primary w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded flex items-center justify-center font-mono cursor-pointer transition-colors duration-300"
                disabled={loading}
              >
                {loading ? "AUTHENTICATING..." : "INITIALIZE_HANDSHAKE ➔"}
              </button>
            </form>
          </Box>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-console-section pt-32 pb-16 min-h-screen bg-slate-950 text-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Console Header */}
        <header className="console-main-header flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
          <div>
            <div className="console-badge font-mono text-xs text-cyan-400 tracking-wider mb-2">// SECURE_SESSION_ACTIVE</div>
            <h1 className="console-title text-2xl sm:text-3xl font-bold text-slate-100">Admin Control Console</h1>
          </div>
          <Flex gap="3" className="console-actions">
            <button className="btn-secondary px-4 py-2 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 rounded flex items-center gap-2 cursor-pointer transition-colors" onClick={() => navigate("/")}>
              <ExternalLink size={14} /> VIEW_SITE
            </button>
            <button className="btn-secondary logout-btn px-4 py-2 border border-red-500/30 hover:border-red-500 text-red-400 rounded flex items-center gap-2 cursor-pointer transition-all" onClick={handleLogout}>
              <LogOut size={14} /> TERMINATE
            </button>
          </Flex>
        </header>

        {/* Inner Admin Frame */}
        <Grid columns={{ base: 1, lg: 12 }} gap="6" className="admin-grid-layout items-start">
          
          {/* Left Navigation Sidebar */}
          <aside className="lg:col-span-3 admin-sidebar p-4 rounded-lg bg-[rgba(16,23,33,0.8)] border border-slate-800 flex flex-col gap-2 font-mono text-xs">
            {[
              { id: "stats", label: "01_METRICS", icon: <BarChart2 size={16} /> },
              { id: "blogs", label: "02_BLOG_CRUD", icon: <FileText size={16} /> },
              { id: "comments", label: "03_COMMENTS", icon: <MessageSquare size={16} /> },
              { id: "inbox", label: "04_INBOX_MESSAGES", icon: <CheckSquare size={16} /> }
            ].map((tab) => (
              <button 
                key={tab.id}
                className={`sidebar-nav-item w-full p-3 rounded flex items-center gap-3 text-left cursor-pointer transition-all duration-200 border ${
                  activeTab === tab.id 
                    ? "bg-cyan-400 text-slate-950 font-bold border-cyan-400 shadow-[0_0_12px_rgba(102,217,237,0.4)]" 
                    : "border-transparent text-slate-400 hover:text-cyan-400 hover:bg-white/5"
                }`}
                onClick={() => { setActiveTab(tab.id as any); setShowBlogForm(false); }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </aside>

          {/* Right Dashboard Area */}
          <main className="lg:col-span-9 admin-dashboard-area p-6 sm:p-8 rounded-lg bg-[rgba(16,23,33,0.8)] border border-[rgba(102,217,237,0.15)] shadow-lg min-h-[500px]">
            
            {/* Tab: Stats */}
            {activeTab === "stats" && (
              <div className="tab-view-container">
                <Flex justify="between" align="center" className="tab-title-row mb-6 border-b border-white/5 pb-4">
                  <h2 className="tab-heading font-mono text-cyan-400">// SYSTEM_METRICS</h2>
                  <button className="btn-secondary w-8 h-8 rounded-full border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center cursor-pointer transition-colors" onClick={fetchStats} disabled={loading}>
                    <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                  </button>
                </Flex>

                <Grid columns={{ base: 1, sm: 2 }} gap="4" className="stats-quick-metrics mb-6">
                  <Box className="metric-box p-5 rounded bg-slate-950/40 border border-slate-850">
                    <div className="metric-label font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">TOTAL_TRAFFIC</div>
                    <div className="metric-val font-mono text-3xl font-bold text-cyan-400">{stats ? stats.totalVisits : 0}</div>
                    <div className="metric-description text-xs text-slate-400 mt-2">Total page views tracked.</div>
                  </Box>
                  <Box className="metric-box p-5 rounded bg-slate-950/40 border border-slate-850">
                    <div className="metric-label font-mono text-[10px] text-slate-500 uppercase tracking-wider mb-2">UNIQUE_VISITORS</div>
                    <div className="metric-val font-mono text-3xl font-bold text-cyan-400">{stats ? stats.uniqueVisitors : 0}</div>
                    <div className="metric-description text-xs text-slate-400 mt-2">Total unique IPs recorded.</div>
                  </Box>
                </Grid>

                <Grid columns={{ base: 1, md: 2 }} gap="6" className="stats-detailed-grid">
                  <Box className="stats-card p-5 rounded bg-slate-950/40 border border-slate-850">
                    <h3 className="stats-card-title font-mono text-xs text-slate-200 border-b border-white/5 pb-2 mb-4">PAGE_VIEWS_BREAKDOWN</h3>
                    <div className="stats-list flex flex-col gap-2 max-h-64 overflow-y-auto pr-2">
                      {(!stats || !stats.pageViews || stats.pageViews.length === 0) ? (
                        <div className="empty-state font-mono text-slate-500 text-xs py-4 text-center">NO_TRAFFIC_DATA</div>
                      ) : (
                        stats.pageViews.map((pv, idx) => (
                          <Flex key={idx} justify="between" className="font-mono text-xs text-slate-400">
                            <span className="truncate mr-4" title={pv.page}>{pv.page}</span>
                            <span className="text-cyan-400">{pv._count.page} views</span>
                          </Flex>
                        ))
                      )}
                    </div>
                  </Box>

                  <Box className="stats-card p-5 rounded bg-slate-950/40 border border-slate-850">
                    <h3 className="stats-card-title font-mono text-xs text-slate-200 border-b border-white/5 pb-2 mb-4">RECENT_VISITS_LOG (100)</h3>
                    <div className="stats-list flex flex-col gap-2 max-h-64 overflow-y-auto pr-2">
                      {(!stats || !stats.recentVisits || stats.recentVisits.length === 0) ? (
                        <div className="empty-state font-mono text-slate-500 text-xs py-4 text-center">NO_VISITS_RECORDED</div>
                      ) : (
                        stats.recentVisits.map((v, idx) => (
                          <Flex key={idx} justify="between" className="font-mono text-[10px] text-slate-400">
                            <span className="truncate mr-4" title={v.page}>{v.page} ({v.ip || "unknown"})</span>
                            <span className="text-slate-500">{new Date(v.timestamp).toLocaleTimeString()}</span>
                          </Flex>
                        ))
                      )}
                    </div>
                  </Box>
                </Grid>
              </div>
            )}

            {/* Tab: Blog CRUD */}
            {activeTab === "blogs" && (
              <div className="tab-view-container">
                {!showBlogForm ? (
                  <>
                    <Flex justify="between" align="center" className="tab-title-row mb-6 border-b border-white/5 pb-4">
                      <h2 className="tab-heading font-mono text-cyan-400">// BLOG_MANAGER</h2>
                      <button className="btn-primary font-mono px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded flex items-center gap-2 cursor-pointer transition-colors" onClick={() => {
                        setEditingBlog(null);
                        setBlogForm({
                          title: "",
                          slug: "",
                          summary: "",
                          content: "",
                          category: "Backend",
                          readTime: "5 min read",
                          tags: "",
                          keyTakeaways: "",
                          published: false
                        });
                        setShowBlogForm(true);
                      }}>
                        <Plus size={14} /> NEW_POST
                      </button>
                    </Flex>

                    <Stack gap="4" className="blogs-dashboard-list">
                      {blogs.length === 0 ? (
                        <div className="empty-dashboard-state font-mono text-sm text-slate-500 text-center py-12">
                          NO_BLOG_POSTS_FOUND. CREATE_ONE_TO_BEGIN.
                        </div>
                      ) : (
                        blogs.map((blog) => (
                          <Box key={blog.id} className="blog-dashboard-item p-5 rounded bg-slate-950/40 border border-slate-850 flex justify-between items-center gap-6 group hover:border-cyan-400/30 transition-colors">
                            <div className="blog-dashboard-details flex-grow">
                              <span className="blog-category-tag font-mono text-xs text-cyan-400 border border-cyan-400/20 px-2 py-0.5 rounded bg-cyan-400/5">{blog.category}</span>
                              <h3 className="blog-dashboard-title text-base sm:text-lg font-bold text-slate-100 mt-2">{blog.title}</h3>
                              <p className="blog-dashboard-summary text-slate-400 text-xs sm:text-sm mt-1 mb-3">{blog.summary}</p>
                              <Flex gap="4" wrap="wrap" className="blog-dashboard-meta font-mono text-[10px] text-slate-500">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {blog.date || "Just now"}</span>
                                <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                                <span>slug: <code>{blog.slug}</code></span>
                                <span className={`font-bold ${blog.published ? "text-green-500" : "text-yellow-500"}`}>{blog.published ? "[PUBLISHED]" : "[DRAFT]"}</span>
                              </Flex>
                            </div>
                            <Flex gap="2" className="blog-dashboard-actions">
                              <button 
                                className="btn-secondary p-2.5 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 rounded cursor-pointer transition-colors" 
                                onClick={() => handleBlogEditInit(blog)}
                                title="Edit Post"
                              >
                                <Edit size={14} />
                              </button>
                              <button 
                                className="btn-secondary p-2.5 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-400 rounded cursor-pointer transition-colors" 
                                onClick={() => handleBlogDelete(blog)}
                                title="Delete Post"
                              >
                                <Trash2 size={14} />
                              </button>
                            </Flex>
                          </Box>
                        ))
                      )}
                    </Stack>
                  </>
                ) : (
                  <div className="blog-editor-view">
                    <Flex justify="between" align="center" className="tab-title-row mb-6 border-b border-white/5 pb-4">
                      <h2 className="tab-heading font-mono text-cyan-400">
                        {editingBlog ? "// EDIT_BLOG_POST" : "// PUBLISH_NEW_BLOG"}
                      </h2>
                      <button className="btn-secondary px-4 py-2 border border-slate-800 text-slate-400 hover:text-slate-200 rounded flex items-center gap-2 cursor-pointer transition-colors" onClick={() => setShowBlogForm(false)}>
                        <ArrowLeft size={14} /> CANCEL
                      </button>
                    </Flex>

                    <form onSubmit={handleBlogSubmit} className="blog-editor-form flex flex-col gap-6">
                      {error && <div className="form-error bg-red-500/10 border border-red-500/25 text-red-400 font-mono text-xs p-3 rounded text-center">{error}</div>}
                      
                      <Grid columns={{ base: 1, md: 2 }} gap="4" className="editor-grid">
                        <Stack gap="2" className="form-group">
                          <label htmlFor="blog-title" className="font-mono text-xs text-slate-400">POST_TITLE</label>
                          <input
                            type="text"
                            id="blog-title"
                            value={blogForm.title}
                            onChange={handleTitleChange}
                            required
                            placeholder="e.g. Architecting Distributed Pipelines"
                            className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-slate-100 text-sm outline-none"
                          />
                        </Stack>

                        <Stack gap="2" className="form-group">
                          <label htmlFor="blog-slug" className="font-mono text-xs text-slate-400">URL_SLUG</label>
                          <input
                            type="text"
                            id="blog-slug"
                            value={blogForm.slug}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, slug: generateSlug(e.target.value) }))}
                            required
                            placeholder="e.g. architecting-distributed-pipelines"
                            className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-slate-100 text-sm outline-none font-mono"
                          />
                        </Stack>
                      </Grid>

                      <Grid columns={{ base: 1, md: 2 }} gap="4" className="editor-grid">
                        <Stack gap="2" className="form-group">
                          <label htmlFor="blog-category" className="font-mono text-xs text-slate-400">CATEGORY</label>
                          <input
                            type="text"
                            id="blog-category"
                            value={blogForm.category}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, category: e.target.value }))}
                            required
                            placeholder="e.g. Backend, AI & Automation, Systems"
                            className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-slate-100 text-sm outline-none"
                          />
                        </Stack>

                        <Stack gap="2" className="form-group">
                          <label htmlFor="blog-readtime" className="font-mono text-xs text-slate-400">ESTIMATED_READ_TIME</label>
                          <input
                            type="text"
                            id="blog-readtime"
                            value={blogForm.readTime}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, readTime: e.target.value }))}
                            required
                            placeholder="e.g. 5 min read"
                            className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-slate-100 text-sm outline-none font-mono"
                          />
                        </Stack>
                      </Grid>

                      <Stack gap="2" className="form-group">
                        <label htmlFor="blog-summary" className="font-mono text-xs text-slate-400">POST_SUMMARY_ABSTRACT (SEO Meta Description)</label>
                        <input
                          type="text"
                          id="blog-summary"
                          value={blogForm.summary}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, summary: e.target.value }))}
                          required
                          placeholder="Provide a brief description sentence. Used for SEO meta descriptions."
                          className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-slate-100 text-sm outline-none"
                        />
                      </Stack>

                      <Grid columns={{ base: 1, md: 2 }} gap="4" className="editor-grid">
                        <Stack gap="2" className="form-group">
                          <label htmlFor="blog-tags" className="font-mono text-xs text-slate-400">SEO_KEYWORDS_TAGS (Comma Separated)</label>
                          <input
                            type="text"
                            id="blog-tags"
                            value={blogForm.tags || ""}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, tags: e.target.value }))}
                            placeholder="e.g. .NET 10, API Design, System Architecture"
                            className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-slate-100 text-sm outline-none"
                          />
                        </Stack>

                        <Stack gap="2" className="form-group">
                          <label htmlFor="blog-takeaways" className="font-mono text-xs text-slate-400">KEY_TAKEAWAYS (Line Separated)</label>
                          <textarea
                            id="blog-takeaways"
                            value={blogForm.keyTakeaways || ""}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, keyTakeaways: e.target.value }))}
                            rows={3}
                            placeholder="3-4 bullet points summarizing the core value."
                            className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-slate-100 text-sm outline-none font-mono"
                          />
                        </Stack>
                      </Grid>

                      <Stack gap="2" className="form-group">
                        <label htmlFor="blog-content" className="font-mono text-xs text-slate-400">POST_CONTENT (HTML Format)</label>
                        <textarea
                          id="blog-content"
                          value={blogForm.content}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, content: e.target.value }))}
                          required
                          rows={12}
                          placeholder="Write the full post body HTML content. Use tags like <p>, <h3>, <code> etc."
                          className="form-input bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded p-3 text-slate-100 text-sm outline-none font-mono"
                        />
                      </Stack>

                      <Flex gap="3" align="center" className="form-group checkbox-group">
                        <input
                          type="checkbox"
                          id="blog-published"
                          checked={blogForm.published || false}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, published: e.target.checked }))}
                          className="w-4 h-4 cursor-pointer rounded accent-cyan-400"
                        />
                        <label htmlFor="blog-published" className="font-mono text-sm text-slate-200 cursor-pointer select-none">
                          PUBLISHED (Make this post visible on the live website)
                        </label>
                      </Flex>

                      <button type="submit" className="btn-primary w-fit px-8 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded flex items-center justify-center font-mono cursor-pointer transition-colors duration-300 self-end mt-4">
                        {loading ? "SAVING_POST..." : "PUBLISH_COMMIT ➔"}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* Tab: Comments Moderator */}
            {activeTab === "comments" && (
              <div className="tab-view-container">
                <Flex justify="between" align="center" className="tab-title-row mb-6 border-b border-white/5 pb-4">
                  <h2 className="tab-heading font-mono text-cyan-400">// COMMENT_MODERATOR</h2>
                  <button className="btn-secondary w-8 h-8 rounded-full border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center cursor-pointer transition-colors" onClick={fetchComments}>
                    <RefreshCw size={14} />
                  </button>
                </Flex>

                <Stack gap="4" className="comments-moderator-list">
                  {comments.length === 0 ? (
                    <div className="empty-dashboard-state font-mono text-sm text-slate-500 text-center py-12">
                      NO_COMMENTS_AVAILABLE_FOR_MODERATION.
                    </div>
                  ) : (
                    comments.map((comment) => (
                      <Box key={comment.id} className={`comment-moderator-item p-5 rounded bg-slate-950/40 border flex flex-col gap-4 transition-colors ${comment.approved ? "border-green-500/20" : "border-yellow-500/20"}`}>
                        <Flex justify="between" align="center" wrap="wrap" gap="4" className="comment-moderator-meta text-xs font-mono text-slate-500 border-b border-white/5 pb-2">
                          <Flex align="center" gap="3">
                            <span className="comment-author-name text-cyan-400 font-bold">{comment.authorName}</span>
                            <span className={`comment-status-pill text-[10px] px-2 py-0.5 rounded font-bold ${comment.approved ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                              {comment.approved ? "APPROVED" : "PENDING"}
                            </span>
                          </Flex>
                          <div className="comment-post-title truncate">
                            post: <code>{comment.postSlug || "General"}</code>
                          </div>
                          <div className="comment-date-val">
                            {new Date(comment.createdAt).toLocaleString()}
                          </div>
                        </Flex>
                        <p className="comment-moderator-content text-sm text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">{comment.content}</p>
                        <Flex gap="3" className="comment-moderator-actions self-end">
                          {!comment.approved && (
                            <button 
                              className="btn-primary px-4 py-1.5 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded flex items-center gap-1.5 text-xs font-mono cursor-pointer transition-colors" 
                              onClick={() => handleCommentApprove(comment)}
                            >
                              <Check size={14} /> APPROVE
                            </button>
                          )}
                          <button 
                            className="btn-secondary px-4 py-1.5 border border-red-500/20 hover:border-red-500 text-slate-400 hover:text-red-400 rounded flex items-center gap-1.5 text-xs font-mono cursor-pointer transition-colors" 
                            onClick={() => handleCommentDelete(comment)}
                          >
                            <Trash2 size={14} /> DELETE
                          </button>
                        </Flex>
                      </Box>
                    ))
                  )}
                </Stack>
              </div>
            )}

            {/* Tab: Inbox */}
            {activeTab === "inbox" && (
              <div className="tab-view-container">
                <Flex justify="between" align="center" className="tab-title-row mb-6 border-b border-white/5 pb-4">
                  <h2 className="tab-heading font-mono text-cyan-400">// INBOX_MESSAGES</h2>
                  <button className="btn-secondary w-8 h-8 rounded-full border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center cursor-pointer transition-colors" onClick={fetchMessages}>
                    <RefreshCw size={14} />
                  </button>
                </Flex>

                <Stack gap="4" className="inbox-messages-list">
                  {messages.length === 0 ? (
                    <div className="empty-dashboard-state font-mono text-sm text-slate-500 text-center py-12">
                      NO_INCOMING_MESSAGES_FOUND.
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <Box key={msg.id} className="inbox-message-item p-5 rounded bg-slate-950/40 border border-slate-850 flex flex-col gap-4">
                        <Flex justify="between" align="center" wrap="wrap" gap="4" className="inbox-message-header text-xs text-slate-500 border-b border-white/5 pb-2">
                          <div className="inbox-sender-info font-sans">
                            <span className="inbox-sender-name text-slate-200 font-bold">{msg.name}</span>{" "}
                            <a href={`mailto:${msg.email}`} className="inbox-sender-email font-mono text-cyan-400/80 hover:text-cyan-400">
                              &lt;{msg.email}&gt;
                            </a>
                          </div>
                          <div className="inbox-message-date font-mono">
                            {new Date(msg.createdAt).toLocaleString()}
                          </div>
                        </Flex>
                        <div className="inbox-message-body text-sm text-slate-300 font-mono leading-relaxed whitespace-pre-wrap">
                          {msg.message}
                        </div>
                        <div className="inbox-message-footer self-end">
                          <button 
                            className="btn-secondary px-4 py-1.5 border border-red-500/20 hover:border-red-500 text-slate-400 hover:text-red-400 rounded flex items-center gap-1.5 text-xs font-mono cursor-pointer transition-colors"
                            onClick={() => handleMessageDelete(msg)}
                          >
                            <Trash2 size={13} /> PURGE_RECORD
                          </button>
                        </div>
                      </Box>
                    ))
                  )}
                </Stack>
              </div>
            )}
          </main>
        </Grid>
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
};
