import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';

interface AdminConsoleProps {
  setActiveView: (view: string) => void;
}

interface BlogPost {
  id?: string;
  _id?: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  readTime: string;
  date?: string;
}

interface CommentItem {
  id?: string;
  _id?: string;
  blogId?: string;
  postId?: string;
  postSlug?: string;
  author: string;
  content: string;
  approved: boolean;
  date?: string;
  createdAt?: string;
}

interface MessageItem {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  message: string;
  date?: string;
  createdAt?: string;
}

interface VisitorStats {
  visitsCount: number;
  totalVisits?: number;
  referrals: { [key: string]: number } | Array<{ referrer: string; count: number }>;
  browsers: { [key: string]: number } | Array<{ browser: string; count: number }>;
  userAgents?: Array<{ userAgent: string; count: number }>;
}

export const AdminConsole: React.FC<AdminConsoleProps> = ({ setActiveView }) => {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(sessionStorage.getItem('adminToken'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!sessionStorage.getItem('adminToken'));
  const [activeTab, setActiveTab] = useState<'stats' | 'blogs' | 'comments' | 'inbox'>('stats');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Stats State
  const [stats, setStats] = useState<VisitorStats | null>(null);

  // Blogs State
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [showBlogForm, setShowBlogForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState<BlogPost>({
    title: '',
    slug: '',
    summary: '',
    content: '',
    category: 'Backend',
    readTime: '5 min read'
  });

  // Comments State
  const [comments, setComments] = useState<CommentItem[]>([]);

  // Inbox Messages State
  const [messages, setMessages] = useState<MessageItem[]>([]);

  // Headers helper
  const getAuthHeaders = () => {
    const t = sessionStorage.getItem('adminToken') || token;
    return {
      'Content-Type': 'application/json',
      'Authorization': t ? `Bearer ${t}` : ''
    };
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await res.json();
      if (res.ok && (data.token || data.success)) {
        const adminToken = data.token || 'authenticated';
        sessionStorage.setItem('adminToken', adminToken);
        setToken(adminToken);
        setIsAuthenticated(true);
      } else {
        setError(data.message || 'Authentication failed. Incorrect password.');
      }
    } catch (err) {
      console.error(err);
      setError('Connection failed. Make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken');
    setToken(null);
    setIsAuthenticated(false);
  };

  // Fetch Stats Data
  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/stats', {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      } else {
        // Try fallback to public stats API if admin endpoint is not fully ready
        const fallbackRes = await fetch('/api/stats', {
          headers: getAuthHeaders()
        });
        if (fallbackRes.ok) {
          const data = await fallbackRes.json();
          setStats(data);
        }
      }
    } catch (err) {
      console.error('Error fetching stats:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Blogs Data
  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/admin/blogs', {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      }
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }
  };

  // Fetch Comments Data
  const fetchComments = async () => {
    try {
      const res = await fetch('/api/admin/comments', {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setComments(data);
      }
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  // Fetch Inbox Messages Data
  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/admin/messages', {
        headers: getAuthHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
    }
  };

  // Load active tab data
  useEffect(() => {
    if (!isAuthenticated) return;
    
    if (activeTab === 'stats') {
      fetchStats();
    } else if (activeTab === 'blogs') {
      fetchBlogs();
    } else if (activeTab === 'comments') {
      fetchComments();
    } else if (activeTab === 'inbox') {
      fetchMessages();
    }
  }, [isAuthenticated, activeTab]);

  // Handle Blog Post CRUD
  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const isEdit = !!editingBlog;
    const blogId = editingBlog?.id || editingBlog?._id || editingBlog?.slug;
    const url = isEdit ? `/api/admin/blogs/${blogId}` : '/api/admin/blogs';
    const method = isEdit ? 'PUT' : 'POST';

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
          title: '',
          slug: '',
          summary: '',
          content: '',
          category: 'Backend',
          readTime: '5 min read'
        });
        fetchBlogs();
      } else {
        // Fallback for PUT: some backends might expect PUT to /api/admin/blogs with the ID in body
        if (isEdit) {
          const fallbackRes = await fetch('/api/admin/blogs', {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify({ ...blogForm, id: blogId })
          });
          if (fallbackRes.ok) {
            setShowBlogForm(false);
            setEditingBlog(null);
            setBlogForm({
              title: '',
              slug: '',
              summary: '',
              content: '',
              category: 'Backend',
              readTime: '5 min read'
            });
            fetchBlogs();
            setLoading(false);
            return;
          }
        }
        const data = await res.json();
        setError(data.message || 'Failed to save blog post.');
      }
    } catch (err) {
      console.error(err);
      setError('Connection failed. Could not save blog post.');
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
      readTime: blog.readTime
    });
    setShowBlogForm(true);
  };

  const handleBlogDelete = async (blog: BlogPost) => {
    const blogId = blog.id || blog._id || blog.slug;
    if (!window.confirm(`Are you sure you want to delete "${blog.title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/blogs/${blogId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (res.ok) {
        fetchBlogs();
      } else {
        alert('Failed to delete blog post.');
      }
    } catch (err) {
      console.error(err);
      alert('Connection failed. Could not delete blog post.');
    }
  };

  // Handle Comment Moderator Actions
  const handleCommentApprove = async (comment: CommentItem) => {
    const commentId = comment.id || comment._id;
    try {
      // Try path version: PUT /api/admin/comments/:id/approve
      let res = await fetch(`/api/admin/comments/${commentId}/approve`, {
        method: 'PUT',
        headers: getAuthHeaders()
      });

      // If that fails, try: PUT /api/admin/comments/:id with body { approved: true }
      if (!res.ok) {
        res = await fetch(`/api/admin/comments/${commentId}`, {
          method: 'PUT',
          headers: getAuthHeaders(),
          body: JSON.stringify({ approved: true })
        });
      }

      // If still fails, try POST path: POST /api/admin/comments/:id/approve
      if (!res.ok) {
        res = await fetch(`/api/admin/comments/${commentId}/approve`, {
          method: 'POST',
          headers: getAuthHeaders()
        });
      }

      if (res.ok) {
        fetchComments();
      } else {
        alert('Failed to approve comment.');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to comment approval endpoint.');
    }
  };

  const handleCommentDelete = async (comment: CommentItem) => {
    const commentId = comment.id || comment._id;
    if (!window.confirm('Delete this comment permanently?')) return;

    try {
      const res = await fetch(`/api/admin/comments/${commentId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (res.ok) {
        fetchComments();
      } else {
        alert('Failed to delete comment.');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to comment deletion endpoint.');
    }
  };

  // Handle Message Actions
  const handleMessageDelete = async (message: MessageItem) => {
    const messageId = message.id || message._id;
    if (!window.confirm('Delete this message permanently?')) return;

    try {
      const res = await fetch(`/api/admin/messages/${messageId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (res.ok) {
        fetchMessages();
      } else {
        alert('Failed to delete message.');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to message deletion endpoint.');
    }
  };

  // Auto-generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setBlogForm(prev => ({
      ...prev,
      title: val,
      slug: generateSlug(val)
    }));
  };

  // Helper to normalize Referrals object/array
  const getReferralsList = () => {
    if (!stats || !stats.referrals) return [];
    if (Array.isArray(stats.referrals)) {
      return stats.referrals;
    }
    return Object.entries(stats.referrals).map(([referrer, count]) => ({
      referrer: referrer || 'Direct / None',
      count
    })).sort((a, b) => b.count - a.count);
  };

  // Helper to normalize User Agents / Browsers object/array
  const getBrowsersList = () => {
    if (!stats) return [];
    const source: any = stats.browsers || stats.userAgents;
    if (!source) return [];
    if (Array.isArray(source)) {
      return source.map((item: any) => {
        const key = item.browser || item.userAgent || 'Unknown';
        return { browser: key, count: item.count || 0 };
      });
    }
    return Object.entries(source).map(([browser, count]) => ({
      browser: browser || 'Unknown',
      count: count as number
    })).sort((a, b) => b.count - a.count);
  };

  if (!isAuthenticated) {
    return (
      <section className="admin-login-section animate-fade-in">
        <div className="container login-container">
          <button className="btn-secondary back-btn font-mono" onClick={() => setActiveView('home')}>
            <ArrowLeft size={14} style={{ marginRight: '0.4rem' }} /> BACK_TO_HOME
          </button>
          
          <div className="glass-card login-card">
            <div className="login-header">
              <div className="lock-icon-container">
                <Lock className="lock-icon" size={28} />
              </div>
              <h2 className="login-title font-mono">ADMIN_GATEWAY</h2>
              <p className="login-subtitle">Provide security token to authenticate session.</p>
            </div>

            <form onSubmit={handleLogin} className="login-form">
              {error && <div className="form-error font-mono">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="gatekeeper-password" className="font-mono">ACCESS_PASSWORD</label>
                <input
                  type="password"
                  id="gatekeeper-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••••"
                  className="form-input text-center font-mono"
                  required
                  autoFocus
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary login-submit-btn font-mono"
                disabled={loading}
              >
                {loading ? 'AUTHENTICATING...' : 'INITIALIZE_HANDSHAKE ➔'}
              </button>
            </form>
          </div>
        </div>

        <style>{`
          .admin-login-section {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .login-container {
            max-width: 440px;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .login-card {
            padding: 3rem 2.5rem;
            border-color: rgba(102, 217, 237, 0.15);
            box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.8), 0 0 25px -5px rgba(102, 217, 237, 0.1);
          }
          .login-header {
            text-align: center;
            margin-bottom: 2rem;
          }
          .lock-icon-container {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: rgba(102, 217, 237, 0.08);
            border: 1px solid rgba(102, 217, 237, 0.25);
            color: var(--accent-color);
            margin-bottom: 1rem;
            box-shadow: 0 0 15px rgba(102, 217, 237, 0.1);
          }
          .login-title {
            font-size: 1.5rem;
            color: var(--text-primary);
            letter-spacing: 0.1em;
            margin-bottom: 0.5rem;
          }
          .login-subtitle {
            font-size: 0.8rem;
            color: var(--text-muted);
          }
          .login-form {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .text-center {
            text-align: center;
          }
          .form-error {
            background: rgba(239, 68, 68, 0.08);
            border: 1px solid rgba(239, 68, 68, 0.25);
            color: #f87171;
            padding: 0.75rem;
            border-radius: 6px;
            font-size: 0.75rem;
            text-align: center;
          }
          .login-submit-btn {
            width: 100%;
            justify-content: center;
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="admin-console-section animate-fade-in">
      <div className="container">
        
        {/* Console Header */}
        <header className="console-main-header">
          <div>
            <div className="console-badge font-mono">// SECURE_SESSION_ACTIVE</div>
            <h1 className="console-title font-sans">Admin Control Console</h1>
          </div>
          <div className="console-actions">
            <button className="btn-secondary font-mono" onClick={() => setActiveView('home')}>
              <ExternalLink size={14} style={{ marginRight: '0.4rem' }} /> VIEW_SITE
            </button>
            <button className="btn-secondary logout-btn font-mono" onClick={handleLogout}>
              <LogOut size={14} style={{ marginRight: '0.4rem' }} /> TERMINATE
            </button>
          </div>
        </header>

        {/* Inner Admin Frame */}
        <div className="admin-grid-layout">
          
          {/* Left Navigation Sidebar */}
          <aside className="admin-sidebar glass-card font-mono">
            <button 
              className={`sidebar-nav-item ${activeTab === 'stats' ? 'active' : ''}`}
              onClick={() => { setActiveTab('stats'); setShowBlogForm(false); }}
            >
              <BarChart2 size={16} /> <span>01_METRICS</span>
            </button>
            <button 
              className={`sidebar-nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
              onClick={() => setActiveTab('blogs')}
            >
              <FileText size={16} /> <span>02_BLOG_CRUD</span>
            </button>
            <button 
              className={`sidebar-nav-item ${activeTab === 'comments' ? 'active' : ''}`}
              onClick={() => { setActiveTab('comments'); setShowBlogForm(false); }}
            >
              <MessageSquare size={16} /> <span>03_COMMENTS</span>
            </button>
            <button 
              className={`sidebar-nav-item ${activeTab === 'inbox' ? 'active' : ''}`}
              onClick={() => { setActiveTab('inbox'); setShowBlogForm(false); }}
            >
              <CheckSquare size={16} /> <span>04_INBOX_MESSAGES</span>
            </button>
          </aside>

          {/* Right Dashboard Area */}
          <main className="admin-dashboard-area glass-card">
            
            {/* Tab: Stats */}
            {activeTab === 'stats' && (
              <div className="tab-view-container">
                <div className="tab-title-row">
                  <h2 className="tab-heading font-mono">// SYSTEM_METRICS</h2>
                  <button className="btn-secondary refresh-btn" onClick={fetchStats} disabled={loading}>
                    <RefreshCw size={14} className={loading ? 'spin' : ''} />
                  </button>
                </div>

                <div className="stats-quick-metrics">
                  <div className="metric-box glass-card">
                    <div className="metric-label font-mono">TOTAL_TRAFFIC</div>
                    <div className="metric-val font-mono">
                      {stats ? (stats.visitsCount || stats.totalVisits || 0) : '0'}
                    </div>
                    <div className="metric-description">Total system views tracked in database.</div>
                  </div>
                  <div className="metric-box glass-card">
                    <div className="metric-label font-mono">ACTIVE_REFERRERS</div>
                    <div className="metric-val font-mono">
                      {getReferralsList().length}
                    </div>
                    <div className="metric-description">Unique tracking source referrers.</div>
                  </div>
                </div>

                <div className="stats-detailed-grid">
                  <div className="stats-card glass-card">
                    <h3 className="stats-card-title font-mono">REFERRALS_SUMMARY</h3>
                    <div className="stats-list">
                      {getReferralsList().length === 0 ? (
                        <div className="empty-state font-mono">NO_REFERRER_DATA</div>
                      ) : (
                        getReferralsList().map((ref, idx) => (
                          <div key={idx} className="stats-item-row font-mono">
                            <span className="stats-item-label truncate" title={ref.referrer}>
                              {ref.referrer}
                            </span>
                            <span className="stats-item-count">{ref.count} views</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="stats-card glass-card">
                    <h3 className="stats-card-title font-mono">BROWSERS_USER_AGENTS</h3>
                    <div className="stats-list">
                      {getBrowsersList().length === 0 ? (
                        <div className="empty-state font-mono">NO_UA_DATA</div>
                      ) : (
                        getBrowsersList().map((ua, idx) => (
                          <div key={idx} className="stats-item-row font-mono">
                            <span className="stats-item-label truncate" title={ua.browser}>
                              {ua.browser}
                            </span>
                            <span className="stats-item-count">{ua.count} hits</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Blog CRUD */}
            {activeTab === 'blogs' && (
              <div className="tab-view-container">
                {!showBlogForm ? (
                  <>
                    <div className="tab-title-row">
                      <h2 className="tab-heading font-mono">// BLOG_MANAGER</h2>
                      <button className="btn-primary font-mono" onClick={() => {
                        setEditingBlog(null);
                        setBlogForm({
                          title: '',
                          slug: '',
                          summary: '',
                          content: '',
                          category: 'Backend',
                          readTime: '5 min read'
                        });
                        setShowBlogForm(true);
                      }}>
                        <Plus size={14} style={{ marginRight: '0.4rem' }} /> NEW_POST
                      </button>
                    </div>

                    <div className="blogs-dashboard-list">
                      {blogs.length === 0 ? (
                        <div className="empty-dashboard-state font-mono">
                          NO_BLOG_POSTS_FOUND. CREATE_ONE_TO_BEGIN.
                        </div>
                      ) : (
                        blogs.map((blog) => (
                          <div key={blog.id || blog._id || blog.slug} className="blog-dashboard-item glass-card">
                            <div className="blog-dashboard-details">
                              <span className="blog-category-tag font-mono">{blog.category}</span>
                              <h3 className="blog-dashboard-title">{blog.title}</h3>
                              <p className="blog-dashboard-summary">{blog.summary}</p>
                              <div className="blog-dashboard-meta font-mono">
                                <span><Calendar size={12} /> {blog.date || 'Static/Loaded'}</span>
                                <span><Clock size={12} /> {blog.readTime}</span>
                                <span>slug: <code>{blog.slug}</code></span>
                              </div>
                            </div>
                            <div className="blog-dashboard-actions">
                              <button 
                                className="btn-secondary action-btn-edit" 
                                onClick={() => handleBlogEditInit(blog)}
                                title="Edit Post"
                              >
                                <Edit size={14} />
                              </button>
                              <button 
                                className="btn-secondary action-btn-delete" 
                                onClick={() => handleBlogDelete(blog)}
                                title="Delete Post"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </>
                ) : (
                  <div className="blog-editor-view">
                    <div className="tab-title-row">
                      <h2 className="tab-heading font-mono">
                        {editingBlog ? '// EDIT_BLOG_POST' : '// PUBLISH_NEW_BLOG'}
                      </h2>
                      <button className="btn-secondary font-mono" onClick={() => setShowBlogForm(false)}>
                        <ArrowLeft size={14} style={{ marginRight: '0.4rem' }} /> CANCEL
                      </button>
                    </div>

                    <form onSubmit={handleBlogSubmit} className="blog-editor-form">
                      {error && <div className="form-error font-mono">{error}</div>}
                      
                      <div className="editor-grid">
                        <div className="form-group">
                          <label htmlFor="blog-title" className="font-mono">POST_TITLE</label>
                          <input
                            type="text"
                            id="blog-title"
                            value={blogForm.title}
                            onChange={handleTitleChange}
                            required
                            placeholder="e.g. Architecting Distributed Pipelines"
                            className="form-input"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="blog-slug" className="font-mono">URL_SLUG</label>
                          <input
                            type="text"
                            id="blog-slug"
                            value={blogForm.slug}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, slug: generateSlug(e.target.value) }))}
                            required
                            placeholder="e.g. architecting-distributed-pipelines"
                            className="form-input font-mono"
                          />
                        </div>
                      </div>

                      <div className="editor-grid">
                        <div className="form-group">
                          <label htmlFor="blog-category" className="font-mono">CATEGORY</label>
                          <input
                            type="text"
                            id="blog-category"
                            value={blogForm.category}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, category: e.target.value }))}
                            required
                            placeholder="e.g. Backend, AI & Automation, Systems"
                            className="form-input"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="blog-readtime" className="font-mono">ESTIMATED_READ_TIME</label>
                          <input
                            type="text"
                            id="blog-readtime"
                            value={blogForm.readTime}
                            onChange={(e) => setBlogForm(prev => ({ ...prev, readTime: e.target.value }))}
                            required
                            placeholder="e.g. 5 min read"
                            className="form-input font-mono"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="blog-summary" className="font-mono">POST_SUMMARY_ABSTRACT</label>
                        <input
                          type="text"
                          id="blog-summary"
                          value={blogForm.summary}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, summary: e.target.value }))}
                          required
                          placeholder="Provide a brief introductory description sentence."
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="blog-content" className="font-mono">POST_CONTENT (Markdown / Text)</label>
                        <textarea
                          id="blog-content"
                          value={blogForm.content}
                          onChange={(e) => setBlogForm(prev => ({ ...prev, content: e.target.value }))}
                          required
                          rows={12}
                          placeholder="Write the full post body content. Paragraphs separated by double linebreaks will render cleanly."
                          className="form-input font-mono text-area-editor"
                        />
                      </div>

                      <div className="form-actions-row">
                        <button type="submit" className="btn-primary font-mono" disabled={loading}>
                          {loading ? 'SAVING_POST...' : 'PUBLISH_COMMIT ➔'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* Tab: Comments Moderator */}
            {activeTab === 'comments' && (
              <div className="tab-view-container">
                <div className="tab-title-row">
                  <h2 className="tab-heading font-mono">// COMMENT_MODERATOR</h2>
                  <button className="btn-secondary refresh-btn" onClick={fetchComments}>
                    <RefreshCw size={14} />
                  </button>
                </div>

                <div className="comments-moderator-list">
                  {comments.length === 0 ? (
                    <div className="empty-dashboard-state font-mono">
                      NO_COMMENTS_AVAILABLE_FOR_MODERATION.
                    </div>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id || comment._id} className={`comment-moderator-item glass-card ${comment.approved ? 'approved' : 'pending'}`}>
                        <div className="comment-moderator-meta">
                          <div className="comment-author-badge">
                            <span className="comment-author-name font-mono">{comment.author}</span>
                            <span className={`comment-status-pill font-mono ${comment.approved ? 'approved' : 'pending'}`}>
                              {comment.approved ? 'APPROVED' : 'PENDING'}
                            </span>
                          </div>
                          <div className="comment-post-title font-mono truncate">
                            post: <code>{comment.postSlug || comment.blogId || comment.postId || 'General'}</code>
                          </div>
                          {comment.date || comment.createdAt ? (
                            <div className="comment-date-val font-mono">
                              {new Date(comment.date || comment.createdAt || '').toLocaleString()}
                            </div>
                          ) : null}
                        </div>
                        <p className="comment-moderator-content font-mono">{comment.content}</p>
                        <div className="comment-moderator-actions">
                          {!comment.approved && (
                            <button 
                              className="btn-primary action-btn-approve font-mono" 
                              onClick={() => handleCommentApprove(comment)}
                            >
                              <Check size={14} style={{ marginRight: '0.3rem' }} /> APPROVE
                            </button>
                          )}
                          <button 
                            className="btn-secondary action-btn-delete-comment font-mono" 
                            onClick={() => handleCommentDelete(comment)}
                          >
                            <Trash2 size={14} style={{ marginRight: '0.3rem' }} /> DELETE
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* Tab: Inbox (Contact form submissions) */}
            {activeTab === 'inbox' && (
              <div className="tab-view-container">
                <div className="tab-title-row">
                  <h2 className="tab-heading font-mono">// INBOX_MESSAGES</h2>
                  <button className="btn-secondary refresh-btn" onClick={fetchMessages}>
                    <RefreshCw size={14} />
                  </button>
                </div>

                <div className="inbox-messages-list">
                  {messages.length === 0 ? (
                    <div className="empty-dashboard-state font-mono">
                      NO_INCOMING_MESSAGES_FOUND.
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <div key={msg.id || msg._id} className="inbox-message-item glass-card">
                        <div className="inbox-message-header">
                          <div className="inbox-sender-info">
                            <span className="inbox-sender-name font-sans">{msg.name}</span>
                            <a href={`mailto:${msg.email}`} className="inbox-sender-email font-mono">
                              &lt;{msg.email}&gt;
                            </a>
                          </div>
                          {msg.date || msg.createdAt ? (
                            <div className="inbox-message-date font-mono">
                              {new Date(msg.date || msg.createdAt || '').toLocaleString()}
                            </div>
                          ) : null}
                        </div>
                        <div className="inbox-message-body font-mono">
                          {msg.message}
                        </div>
                        <div className="inbox-message-footer">
                          <button 
                            className="btn-secondary delete-msg-btn font-mono"
                            onClick={() => handleMessageDelete(msg)}
                          >
                            <Trash2 size={13} style={{ marginRight: '0.3rem' }} /> PURGE_RECORD
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        .admin-console-section {
          padding-top: 8rem;
          padding-bottom: 6rem;
          min-height: 90vh;
        }
        .console-main-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .console-badge {
          color: var(--accent-color);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .console-title {
          font-size: 2.25rem;
          color: var(--text-primary);
        }
        .console-actions {
          display: flex;
          gap: 1rem;
        }
        .logout-btn:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }

        /* Layout Grid */
        .admin-grid-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 2rem;
          align-items: start;
        }

        /* Sidebar styling */
        .admin-sidebar {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.5rem 1rem;
          border-color: rgba(255, 255, 255, 0.05);
        }
        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          padding: 0.85rem 1.25rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.8rem;
          text-align: left;
          transition: var(--transition-fast);
          width: 100%;
        }
        .sidebar-nav-item:hover {
          color: var(--accent-color);
          background: rgba(102, 217, 237, 0.03);
          border-color: rgba(102, 217, 237, 0.08);
        }
        .sidebar-nav-item.active {
          color: var(--bg-dark);
          background: var(--accent-color);
          border-color: var(--accent-color);
          font-weight: 600;
          box-shadow: 0 0 15px var(--accent-glow);
        }

        /* Dashboard content container */
        .admin-dashboard-area {
          min-height: 500px;
          border-color: rgba(102, 217, 237, 0.1);
          padding: 2.5rem;
        }
        .tab-view-container {
          animation: fadeIn 0.3s ease-out;
        }
        .tab-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }
        .tab-heading {
          font-size: 1.25rem;
          color: var(--accent-color);
          letter-spacing: 0.05em;
        }
        .refresh-btn {
          width: 32px;
          height: 32px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* Stats Tab Specifics */
        .stats-quick-metrics {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .metric-box {
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
        }
        .metric-box:hover {
          transform: none;
          box-shadow: none;
        }
        .metric-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .metric-val {
          font-size: 2.25rem;
          color: var(--accent-color);
          text-shadow: 0 0 10px var(--accent-glow);
          font-weight: 700;
        }
        .metric-description {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }
        .stats-detailed-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        .stats-card {
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
        }
        .stats-card:hover {
          transform: none;
          box-shadow: none;
        }
        .stats-card-title {
          font-size: 0.85rem;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.5rem;
          letter-spacing: 0.05em;
        }
        .stats-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 300px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }
        .stats-item-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          padding: 0.5rem 0.75rem;
          background: rgba(7, 9, 14, 0.4);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        .stats-item-label {
          color: var(--text-secondary);
          max-width: 70%;
        }
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .stats-item-count {
          color: var(--accent-color);
        }
        .empty-state {
          color: var(--text-muted);
          font-size: 0.75rem;
          text-align: center;
          padding: 2rem 0;
        }

        /* Blog CRUD Tab */
        .blogs-dashboard-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .blog-dashboard-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
          gap: 1.5rem;
        }
        .blog-dashboard-item:hover {
          transform: none;
          box-shadow: none;
          border-color: rgba(102, 217, 237, 0.15);
        }
        .blog-dashboard-details {
          flex: 1;
        }
        .blog-category-tag {
          font-size: 0.7rem;
          color: var(--accent-color);
          background: rgba(102, 217, 237, 0.05);
          padding: 0.15rem 0.5rem;
          border-radius: 3px;
          border: 1px solid rgba(102, 217, 237, 0.15);
        }
        .blog-dashboard-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-top: 0.5rem;
          margin-bottom: 0.35rem;
        }
        .blog-dashboard-summary {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        .blog-dashboard-meta {
          display: flex;
          gap: 1.5rem;
          font-size: 0.7rem;
          color: var(--text-muted);
          flex-wrap: wrap;
        }
        .blog-dashboard-meta span {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }
        .blog-dashboard-meta code {
          color: var(--accent-color);
        }
        .blog-dashboard-actions {
          display: flex;
          gap: 0.5rem;
        }
        .blog-dashboard-actions button {
          width: 36px;
          height: 36px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .action-btn-edit:hover {
          border-color: var(--accent-color);
          color: var(--accent-color);
          background: rgba(102, 217, 237, 0.05);
        }
        .action-btn-delete:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }
        .empty-dashboard-state {
          text-align: center;
          padding: 3rem 0;
          color: var(--text-muted);
          font-size: 0.8rem;
          border: 1px dashed var(--border-color);
          border-radius: 6px;
        }

        /* Blog Editor Form */
        .blog-editor-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .editor-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .text-area-editor {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.5;
        }
        .form-actions-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;
        }

        /* Comments Moderation */
        .comments-moderator-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .comment-moderator-item {
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .comment-moderator-item:hover {
          transform: none;
          box-shadow: none;
        }
        .comment-moderator-item.pending {
          border-left: 3px solid #eab308;
        }
        .comment-moderator-item.approved {
          border-left: 3px solid #22c55e;
        }
        .comment-moderator-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: center;
        }
        .comment-author-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .comment-author-name {
          color: var(--text-primary);
          font-weight: 600;
        }
        .comment-status-pill {
          font-size: 0.6rem;
          padding: 0.1rem 0.4rem;
          border-radius: 3px;
        }
        .comment-status-pill.pending {
          background: rgba(234, 179, 8, 0.08);
          border: 1px solid rgba(234, 179, 8, 0.2);
          color: #facc15;
        }
        .comment-status-pill.approved {
          background: rgba(34, 197, 94, 0.08);
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #4ade80;
        }
        .comment-post-title {
          max-width: 250px;
        }
        .comment-post-title code {
          color: var(--accent-color);
        }
        .comment-moderator-content {
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(7, 9, 14, 0.3);
          padding: 0.75rem 1rem;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          line-height: 1.4;
        }
        .comment-moderator-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
        }
        .action-btn-approve {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          border-radius: 4px;
        }
        .action-btn-delete-comment {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          border-radius: 4px;
        }
        .action-btn-delete-comment:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }

        /* Inbox messages styling */
        .inbox-messages-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .inbox-message-item {
          padding: 1.5rem;
          border-color: rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .inbox-message-item:hover {
          transform: none;
          box-shadow: none;
          border-color: rgba(102, 217, 237, 0.15);
        }
        .inbox-message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .inbox-sender-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .inbox-sender-name {
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1.05rem;
        }
        .inbox-sender-email {
          font-size: 0.75rem;
          color: var(--accent-color);
          text-decoration: underline;
        }
        .inbox-message-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .inbox-message-body {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          background: rgba(7, 9, 14, 0.4);
          padding: 1rem 1.25rem;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          white-space: pre-wrap;
        }
        .inbox-message-footer {
          display: flex;
          justify-content: flex-end;
        }
        .delete-msg-btn {
          padding: 0.5rem 1rem;
          font-size: 0.75rem;
          border-radius: 4px;
        }
        .delete-msg-btn:hover {
          border-color: #ef4444;
          color: #ef4444;
          background: rgba(239, 68, 68, 0.05);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Layout adjustments */
        @media (max-width: 900px) {
          .admin-grid-layout {
            grid-template-columns: 1fr;
          }
          .admin-sidebar {
            flex-direction: row;
            overflow-x: auto;
            padding: 1rem;
            gap: 0.5rem;
          }
          .sidebar-nav-item {
            white-space: nowrap;
            width: auto;
          }
          .stats-detailed-grid {
            grid-template-columns: 1fr;
          }
          .editor-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};
