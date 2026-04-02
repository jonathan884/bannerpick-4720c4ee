import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Heart, Bookmark, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-4xl mx-auto"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-wider">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
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
            return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
          })}
        </motion.article>

        {/* Sidebar */}
        <div className="hidden md:flex flex-col items-center gap-4 sticky top-24 h-fit">
          <motion.button
            whileTap={{ scale: 1.3 }}
            onClick={handleLike}
            className={`w-12 h-12 rounded-full border flex items-center justify-center flex-col ${liked ? "border-red-500 text-red-500" : "border-border text-muted-foreground hover:text-primary"}`}
          >
            <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
          </motion.button>
          <span className="text-xs text-muted-foreground">{likes}</span>

          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={() => setBookmarked(!bookmarked)}
            className={`w-12 h-12 rounded-full border flex items-center justify-center ${bookmarked ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-primary"}`}
          >
            <Bookmark className={`w-5 h-5 ${bookmarked ? "fill-current" : ""}`} />
          </motion.button>

          <div className="relative">
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={() => setShareOpen(!shareOpen)}
              className="w-12 h-12 rounded-full border border-border text-muted-foreground hover:text-primary flex items-center justify-center"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
            {shareOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-14 top-0 flex gap-2 glass rounded-full px-3 py-2"
              >
                <button onClick={() => handleShare("twitter")} className="text-muted-foreground hover:text-primary"><Twitter className="w-4 h-4" /></button>
                <button onClick={() => handleShare("facebook")} className="text-muted-foreground hover:text-primary"><Facebook className="w-4 h-4" /></button>
                <button onClick={() => handleShare("linkedin")} className="text-muted-foreground hover:text-primary"><Linkedin className="w-4 h-4" /></button>
                <button onClick={() => handleShare("copy")} className="text-muted-foreground hover:text-primary"><LinkIcon className="w-4 h-4" /></button>
              </motion.div>
            )}
          </div>
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
