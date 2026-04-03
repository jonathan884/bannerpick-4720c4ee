import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutTemplate, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <LayoutTemplate className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="text-xl font-heading font-bold text-gradient-primary">BannerPick</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creating stunning, high-converting banner designs for businesses worldwide since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Featured", href: "#featured" },
                { label: "About", href: "#about" },
                { label: "Blog", href: "/blog", isRoute: true },
              ].map((link) =>
                link.isRoute ? (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@bannerpick.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" /> info@bannerpick.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/company/110921855/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BannerPick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
