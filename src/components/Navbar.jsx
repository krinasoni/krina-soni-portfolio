import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#090611]/80 backdrop-blur-xl border-b border-purple-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white transition-transform hover:scale-105"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#C4B5FD] p-[1.5px] shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <div className="w-full h-full bg-[#090611] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider text-gradient">KS</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-wide text-[#F5F3FF] group-hover:text-[#C4B5FD] transition-colors">
                Krina Soni
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#A7A0B8]">
                Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full glass-panel border border-purple-500/20 px-4 py-1.5 shadow-lg">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#F5F3FF]"
                      : "text-[#A7A0B8] hover:text-[#F5F3FF] hover:bg-purple-500/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 to-[#A855F7]/30 border border-purple-400/40 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-purple-400/30 bg-gradient-to-r from-[#8B5CF6]/20 via-[#A855F7]/30 to-[#8B5CF6]/20 hover:border-purple-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C4B5FD] transition-transform group-hover:rotate-12" />
              <span>Let's Talk</span>
              <ArrowRight className="w-3 h-3 text-[#C4B5FD] transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl glass-panel text-[#C4B5FD] hover:text-white border border-purple-500/30 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-2xl p-6 border border-purple-500/30 shadow-2xl bg-[#090611]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-purple-600/25 text-[#F5F3FF] border border-purple-400/30"
                        : "text-[#A7A0B8] hover:text-white hover:bg-purple-500/10"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#A855F7] glow-purple" />}
                  </a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-purple-500/20">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white text-sm font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <Sparkles className="w-4 h-4 text-[#C4B5FD]" />
                  <span>Let's Create Something</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
