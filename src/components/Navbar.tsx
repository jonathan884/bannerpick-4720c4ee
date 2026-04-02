import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutTemplate, Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Featured", href: "#featured" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog", isRoute: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string, isRoute?: boolean) => {
    setMobileOpen(false);
    if (!isRoute && location.pathname !== "/") {
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <LayoutTemplate className="w-8 h-8 text-primary" />
              </motion.div>
              <span className="text-xl font-heading font-bold text-gradient-primary">
                BannerPick
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setContactOpen(true)}
                className="px-5 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-glow"
              >
                Contact
              </motion.button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-border"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setContactOpen(true);
                  }}
                  className="px-5 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm mt-2"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default Navbar;
