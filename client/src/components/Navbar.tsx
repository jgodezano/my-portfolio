/* ============================================================
   Navbar — Ops Dashboard Design
   Sticky top nav with scroll-triggered backdrop blur
   Logo: {J} brand mark in electric cyan
   ============================================================ */
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(11, 15, 26, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 217, 255, 0.1)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <div
              className="w-9 h-9 rounded flex items-center justify-center text-sm font-bold transition-all duration-200"
              style={{
                background: "rgba(0, 217, 255, 0.08)",
                border: "1px solid rgba(0, 217, 255, 0.4)",
                color: "#00D9FF",
                fontFamily: "'JetBrains Mono', monospace",
                boxShadow: "0 0 12px rgba(0, 217, 255, 0.15)",
              }}
            >
              {"{J}"}
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#F1F5F9",
                letterSpacing: "0.01em",
              }}
            >
              Jessie Godezano
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded text-sm font-medium transition-all duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#94A3B8",
                  background: "transparent",
                  border: "none",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#00D9FF";
                  (e.target as HTMLButtonElement).style.background = "rgba(0, 217, 255, 0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = "#94A3B8";
                  (e.target as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}

          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#00D9FF",
                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#00D9FF",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: "#00D9FF",
                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(11, 15, 26, 0.97)",
            borderTop: "1px solid rgba(0, 217, 255, 0.1)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 rounded text-sm font-medium transition-colors duration-150"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#94A3B8",
                }}
              >
                {link.label}
              </button>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}
