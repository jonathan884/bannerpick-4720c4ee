import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, FolderOpen, User, Mail, Phone, FileText, Lock } from "lucide-react";
import { toast } from "sonner";

interface PortfolioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const adTypes = [
  "HTML5 Banner Ads",
  "Static Banner Ads",
  "Animated GIF Banner Ads",
  "Social Media Ads",
  "Display Ads",
  "Retargeting Ads",
  "All Types",
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.1 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300, delay: 0.1 },
  },
  exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
};

const fieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 + i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const PortfolioModal = ({ open, onOpenChange }: PortfolioModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", adType: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Request: ${form.adType}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested In: ${form.adType}\n\nPlease share your portfolio.`;
    window.open(
      `mailto:info@bannerpick.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    toast.success("Request sent! We'll share our portfolio shortly.");
    setForm({ name: "", email: "", phone: "", adType: "" });
    onOpenChange(false);
  };

  const inputClass = (field: string) =>
    `w-full pl-11 pr-4 py-3.5 rounded-xl bg-secondary/80 border text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
      focused === field
        ? "border-primary/60 ring-2 ring-primary/20 bg-secondary"
        : "border-border hover:border-primary/30"
    }`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => onOpenChange(false)}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <div
              className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-[80px] animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-card/95 backdrop-blur-sm border border-border/80 p-8 shadow-2xl my-auto overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />

            {/* Header */}
            <div className="relative flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <FolderOpen className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gradient-primary">
                    View Our Portfolio
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Fill in your details to access our work
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onOpenChange(false)}
                className="w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Info banner */}
            <motion.div
              custom={0}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15 mb-6"
            >
              <Lock className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                To ensure quality engagement, we share our portfolio with verified prospects. Please provide your details and we'll send it to you right away.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="relative space-y-4">
              {/* Name */}
              <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible" className="relative">
                <User
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focused === "name" ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("name")}
                />
              </motion.div>

              {/* Email */}
              <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible" className="relative">
                <Mail
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focused === "email" ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("email")}
                />
              </motion.div>

              {/* Phone */}
              <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible" className="relative">
                <Phone
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focused === "phone" ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("phone")}
                />
              </motion.div>

              {/* Ad Type */}
              <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="visible" className="relative">
                <FileText
                  className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${
                    focused === "adType" ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <select
                  required
                  value={form.adType}
                  onChange={(e) => setForm({ ...form, adType: e.target.value })}
                  onFocus={() => setFocused("adType")}
                  onBlur={() => setFocused(null)}
                  className={inputClass("adType")}
                  style={{ paddingLeft: "2.75rem" }}
                >
                  <option value="">What type of ads are you looking for?</option>
                  {adTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Submit */}
              <motion.button
                custom={5}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px hsl(38 92% 55% / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-glow text-base mt-2"
              >
                <Send className="w-4 h-4" />
                Request Portfolio Access
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
