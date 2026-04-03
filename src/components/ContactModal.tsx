import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { toast } from "sonner";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const projectTypes = ["Social Media Banner", "Website Banner", "Billboard", "Email Header", "YouTube Thumbnail", "HTML5 Banner", "Animated GIF Banner", "Other"];

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", requirements: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Project Inquiry: ${form.projectType}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.projectType}\n\nRequirements:\n${form.requirements}`;
    window.open(`mailto:info@bannerpick.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    toast.success("Opening your email client...");
    setForm({ name: "", email: "", phone: "", projectType: "", requirements: "" });
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-y-auto"
          style={{ position: 'fixed' }}
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-card border border-border p-6 shadow-card my-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold text-gradient-primary">Get In Touch</h2>
              <button onClick={() => onOpenChange(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <select
                required
                value={form.projectType}
                onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select Project Type</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <textarea
                placeholder="Project Requirements"
                required
                rows={4}
                value={form.requirements}
                onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-glow"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
