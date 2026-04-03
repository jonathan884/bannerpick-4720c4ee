import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Heart, Bookmark, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { blogPosts } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

const renderTable = (tableContent: string) => {
  const lines = tableContent.trim().split("\n").filter(l => l.trim());
  if (lines.length < 2) return null;
  const headers = lines[0].split("|").map(h => h.trim());
  const rows = lines.slice(1).map(l => l.split("|").map(c => c.trim()));

  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary/50">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-heading font-semibold text-foreground border-b border-border">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/20 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-muted-foreground">
                  {cell === "✅" ? <span className="text-green-500">✅</span> :
                   cell === "❌" ? <span className="text-red-500">❌</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const [likes, setLikes] = useState(42);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };
    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } else {
      window.open(urls[platform], "_blank");
    }
    setShareOpen(false);
  };

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const renderContent = () => {
    // Handle [TABLE]...[/TABLE] blocks
    const tableRegex = /\[TABLE\]([\s\S]*?)\[\/TABLE\]/g;
    const parts: { type: "text" | "table"; content: string }[] = [];
    let lastIndex = 0;
    let match;

    while ((match = tableRegex.exec(post.content)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: "text", content: post.content.slice(lastIndex, match.index) });
      }
      parts.push({ type: "table", content: match[1] });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < post.content.length) {
      parts.push({ type: "text", content: post.content.slice(lastIndex) });
    }

    return parts.map((part, partIdx) => {
      if (part.type === "table") {
        return <div key={partIdx}>{renderTable(part.content)}</div>;
      }

      return part.content.split("\n\n").map((block, i) => {
        const key = `${partIdx}-${i}`;
        if (block.startsWith("## ")) {
          return <h2 key={key} className="text-2xl font-heading font-bold mt-8 mb-3 text-foreground">{block.replace("## ", "")}</h2>;
        }

        // Check if block contains arrow bullet points
        if (block.includes("→ ")) {
          const lines = block.split("\n");
          return (
            <div key={key} className="mb-4">
              {lines.map((line, j) => {
                const trimmed = line.trim();
                if (trimmed.startsWith("→ ")) {
                  return (
                    <div key={j} className="flex items-start gap-2 py-1 text-muted-foreground">
                      <span className="text-primary mt-0.5">→</span>
                      <span>{renderFormattedText(trimmed.slice(2))}</span>
                    </div>
                  );
                }
                if (trimmed) {
                  return <p key={j} className="text-muted-foreground leading-relaxed mb-1">{renderFormattedText(trimmed)}</p>;
                }
                return null;
              })}
            </div>
          );
        }

        // Check for ✅ / ❌ lines
        if (block.includes("✅") || block.includes("❌")) {
          const lines = block.split("\n");
          return (
            <div key={key} className="mb-4">
              {lines.map((line, j) => {
                const trimmed = line.trim();
                if (trimmed.startsWith("✅") || trimmed.startsWith("❌")) {
                  return (
                    <div key={j} className="flex items-start gap-2 py-1 text-muted-foreground">
                      <span>{trimmed.startsWith("✅") ? "✅" : "❌"}</span>
                      <span>{renderFormattedText(trimmed.slice(2))}</span>
                    </div>
                  );
                }
                if (trimmed) {
                  return <p key={j} className="text-muted-foreground leading-relaxed mb-1">{renderFormattedText(trimmed)}</p>;
                }
                return null;
              })}
            </div>
          );
        }

        // Check for dash bullet points
        if (block.startsWith("- ") || block.includes("\n- ")) {
          const lines = block.split("\n");
          return (
            <div key={key} className="mb-4">
              {lines.map((line, j) => {
                const trimmed = line.trim();
                if (trimmed.startsWith("- ")) {
                  return (
                    <div key={j} className="flex items-start gap-2 py-1 text-muted-foreground">
                      <span className="text-primary mt-0.5">→</span>
                      <span>{renderFormattedText(trimmed.slice(2))}</span>
                    </div>
                  );
                }
                if (trimmed) {
                  return <p key={j} className="text-muted-foreground leading-relaxed mb-1">{renderFormattedText(trimmed)}</p>;
                }
                return null;
              })}
            </div>
          );
        }

        return <p key={key} className="text-muted-foreground leading-relaxed mb-4">{renderFormattedText(block)}</p>;
      });
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Reading progress bar */}
      <div className="fixed top-16 left-0 right-0 h-0.5 bg-primary/20 z-40">
        <motion.div
          className="h-full bg-gradient-primary"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Hero - Clean text-focused header */}
      <div className="pt-24 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog">
            <motion.div whileHover={{ x: -5 }} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Blog</span>
            </motion.div>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mt-4 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                {post.author}
              </span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>
          </motion.div>

          <div className="rounded-2xl overflow-hidden border border-border mb-8">
            <img src={post.image} alt={post.title} className="w-full h-[300px] md:h-[400px] object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 pb-12 grid md:grid-cols-[1fr_auto] gap-10">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-none"
        >
          {renderContent()}
        </motion.article>

        {/* Sidebar */}
        <div className="hidden md:flex flex-col items-center gap-4 sticky top-24 h-fit">
          <motion.button
            whileTap={{ scale: 1.3 }}
            onClick={handleLike}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${liked ? "border-red-500 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]" : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"}`}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
          </motion.button>
          <span className="text-xs text-muted-foreground">{likes}</span>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={() => {
              setBookmarked(!bookmarked);
              toast.success(bookmarked ? "Bookmark removed" : "Article bookmarked!");
            }}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${bookmarked ? "border-primary text-primary shadow-glow" : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"}`}
          >
            <Bookmark className={`w-5 h-5 ${bookmarked ? "fill-current" : ""}`} />
          </motion.button>

          <div className="relative">
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={() => setShareOpen(!shareOpen)}
              className="w-12 h-12 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
            {shareOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-14 top-0 flex gap-2 glass rounded-full px-3 py-2"
              >
                <button onClick={() => handleShare("twitter")} className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></button>
                <button onClick={() => handleShare("facebook")} className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></button>
                <button onClick={() => handleShare("linkedin")} className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></button>
                <button onClick={() => handleShare("copy")} className="text-muted-foreground hover:text-primary transition-colors"><LinkIcon className="w-4 h-4" /></button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-heading font-bold mb-8 text-center">
          Related <span className="text-gradient-primary">Articles</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((rp, i) => (
            <motion.div
              key={rp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -6 }}
            >
              <Link to={`/blog/${rp.id}`} className="group block rounded-xl overflow-hidden glass border border-border">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={rp.image} alt={rp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">{rp.category}</span>
                  <h3 className="text-sm font-heading font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-2">{rp.title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back to Blog button */}
      <div className="text-center pb-16">
        <Link to="/blog">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </motion.span>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
