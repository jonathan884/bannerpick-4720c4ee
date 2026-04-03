import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Heart, Bookmark, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { blogPosts } from "@/data/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Reading progress bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-0.5 bg-primary/20 z-40"
        style={{ transformOrigin: "left" }}
      >
        <motion.div
          className="h-full bg-gradient-primary"
          style={{ width: `${readProgress}%` }}
        />
      </motion.div>

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
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

        <Link to="/blog" className="absolute top-24 left-6">
          <motion.div whileHover={{ x: -5 }} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors glass px-4 py-2 rounded-full">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </motion.div>
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-[1fr_auto] gap-10">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert max-w-none"
        >
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-heading font-bold mt-8 mb-3 text-foreground">{block.replace("## ", "")}</h2>;
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter(l => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc list-inside space-y-1 text-muted-foreground mb-4">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
          })}
        </motion.article>

        {/* Sidebar */}
        <div className="hidden md:flex flex-col items-center gap-4 sticky top-24 h-fit">
          <motion.button
            whileTap={{ scale: 1.3 }}
            onClick={handleLike}
            className={`w-12 h-12 rounded-full border flex items-center justify-center flex-col transition-all ${liked ? "border-red-500 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]" : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"}`}
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
