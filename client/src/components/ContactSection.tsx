/* ============================================================
   ContactSection + Footer — Ops Dashboard Design
   Clean contact card with social links and footer
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const contactLinks = [
  {
    icon: "✉️",
    label: "Email",
    value: "jessiegodezano20@gmail.com",
    href: "mailto:jessiegodezano20@gmail.com",
    color: "#00D9FF",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "+63 935 311 9416",
    href: "tel:+639353119416",
    color: "#22D3EE",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "jessie-e-godezano-2648a2246",
    href: "https://linkedin.com/in/jessie-e-godezano-2648a2246",
    color: "#3B82F6",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Mandaluyong City, Philippines",
    href: null,
    color: "#8B5CF6",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jessiegodezano20@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className="py-24"
        style={{ background: "#111827" }}
      >
        <div className="container">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-12">
            <span className="mono-label">05 // Contact</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,217,255,0.3), transparent)" }} />
          </div>

          <div className="max-w-3xl">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1), transform 0.6s cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#F1F5F9",
                  marginBottom: "1rem",
                }}
              >
                Ready to{" "}
                <span style={{ color: "#00D9FF" }}>connect?</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "#64748B",
                  lineHeight: 1.75,
                  marginBottom: "3rem",
                  maxWidth: "520px",
                }}
              >
                I'm currently open to new opportunities in IT operations, application support,
                and DevOps-adjacent roles. Whether you have a role in mind or just want to
                talk tech — my inbox is always open.
              </p>
            </div>

            {/* Contact cards */}
            <div
              className="grid sm:grid-cols-2 gap-4"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1) 0.15s, transform 0.6s cubic-bezier(0.23,1,0.32,1) 0.15s",
              }}
            >
              {contactLinks.map((link) => (
                <div
                  key={link.label}
                  className="p-4 rounded-lg transition-all duration-200"
                  style={{
                    background: "rgba(11, 15, 26, 0.8)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${link.color}30`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 16px ${link.color}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0 text-lg"
                      style={{
                        background: `${link.color}10`,
                        border: `1px solid ${link.color}25`,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div className="min-w-0">
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.65rem",
                          color: link.color,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "2px",
                        }}
                      >
                        {link.label}
                      </div>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="block truncate"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.825rem",
                            color: "#94A3B8",
                            textDecoration: "none",
                            transition: "color 0.15s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#F1F5F9")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                        >
                          {link.value}
                        </a>
                      ) : (
                        <span
                          className="block truncate"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.825rem",
                            color: "#94A3B8",
                          }}
                        >
                          {link.value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-8 flex flex-wrap gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1) 0.3s",
              }}
            >
              <button
                onClick={handleCopyEmail}
                className="btn-outline-cyan px-6 py-3 rounded text-sm font-semibold"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: copied ? "#22D3EE" : "#00D9FF",
                  border: `1px solid ${copied ? "rgba(34,211,238,0.5)" : "rgba(0,217,255,0.5)"}`,
                  background: "transparent",
                  transition: "all 0.2s",
                }}
              >
                {copied ? "✓ Copied!" : "Copy Email"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0B0F1A",
          borderTop: "1px solid rgba(0,217,255,0.08)",
          padding: "2rem 0",
        }}
      >
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded flex items-center justify-center text-xs font-bold"
                style={{
                  background: "rgba(0, 217, 255, 0.08)",
                  border: "1px solid rgba(0, 217, 255, 0.3)",
                  color: "#00D9FF",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {"{J}"}
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.875rem",
                  color: "#64748B",
                }}
              >
                Jessie E. Godezano
              </span>
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "#374151",
                letterSpacing: "0.04em",
              }}
            >
              © {new Date().getFullYear()} · Built with precision · Mandaluyong, PH
            </div>
            <div className="flex items-center gap-1">
              <div className="status-dot" style={{ width: "6px", height: "6px" }} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#22D3EE",
                  letterSpacing: "0.06em",
                }}
              >
                OPEN TO WORK
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
