import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutTemplate, Menu, X, ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Featured", href: "#featured" },
  { label: "Portfolio", href: "#categories" },
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
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <LayoutTemplate className="w-7 h-7 text-primary" />
              </motion.div>
              <span className="text-lg font-heading font-bold text-gradient-primary">
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
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setContactOpen(true)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              >
                Contact
              </button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setContactOpen(true)}
                className="group inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm"
              >
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
              className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50"
            >
              <div className="px-4 py-4 flex flex-col gap-3">
                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
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
                  className="px-5 py-2.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm mt-2"
                >
                  Get Started
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
