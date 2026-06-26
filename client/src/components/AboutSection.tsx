/* ============================================================
   AboutSection — Ops Dashboard Design
   Two-column: left text, right stat cards + education
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const highlights = [
  { icon: "🛡️", label: "Incident Triage", desc: "Escalated L2 tickets, RCA, Jira tracking" },
  { icon: "☁️", label: "Cloud & Containers", desc: "GCP, Kubernetes, Docker, Helm" },
  { icon: "🤖", label: "AI Integration", desc: "ChatGPT & Claude API, Telegram Bots" },
  { icon: "⚙️", label: "CI/CD Pipelines", desc: "Jenkins, GitHub Actions, GitLab CI" },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24"
      style={{ background: "#0B0F1A" }}
    >
      <div className="container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="mono-label">01 // About</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,217,255,0.3), transparent)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
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
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              I keep production{" "}
              <span style={{ color: "#00D9FF" }}>running.</span>
            </h2>

            <div className="space-y-4" style={{ color: "#64748B", lineHeight: 1.8, fontFamily: "'Inter', sans-serif", fontSize: "0.95rem" }}>
              <p>
                I'm an <strong style={{ color: "#94A3B8" }}>L2 Support Specialist and Application Support Engineer</strong> based
                in Mandaluyong City, Philippines, with 3+ years of hands-on experience
                keeping live platforms healthy — from gaming systems to school information
                platforms.
              </p>
              <p>
                My day-to-day involves triaging escalated incidents, tracing API failures
                end-to-end through Kubernetes logs, BigQuery, and MongoDB, and coordinating
                with L3 engineers to resolve issues before they reach customers. I don't
                just fix problems — I build tools that prevent them.
              </p>
              <p>
                I built AI-powered Telegram bots that let support teams query player data
                in plain English, eliminating manual database lookups. I've managed
                deployment pipelines, Helm chart updates, and container configurations
                across Jenkins, GitHub Actions, and GitLab CI.
              </p>
            </div>

            {/* Contact info */}
            <div className="mt-8 space-y-2">
              {[
                { label: "Location", value: "Mandaluyong City, Philippines" },
                { label: "Email", value: "jessiegodezano20@gmail.com", href: "mailto:jessiegodezano20@gmail.com" },
                { label: "Phone", value: "+63 935 311 9416", href: "tel:+639353119416" },
                { label: "LinkedIn", value: "jessie-e-godezano-2648a2246", href: "https://linkedin.com/in/jessie-e-godezano-2648a2246" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      color: "#00D9FF",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      minWidth: "72px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      width: "1px",
                      height: "12px",
                      background: "rgba(0,217,255,0.3)",
                      flexShrink: 0,
                    }}
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "#94A3B8",
                        textDecoration: "none",
                        transition: "color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#00D9FF")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#94A3B8" }}>
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlights + Education */}
          <div
            className="space-y-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1) 0.15s, transform 0.6s cubic-bezier(0.23,1,0.32,1) 0.15s",
            }}
          >
            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="p-4 rounded-lg transition-all duration-200"
                  style={{
                    background: "rgba(17, 24, 39, 0.8)",
                    border: "1px solid rgba(0, 217, 255, 0.12)",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,217,255,0.3)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 16px rgba(0,217,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,217,255,0.12)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "#F1F5F9",
                      marginBottom: "4px",
                    }}
                  >
                    {h.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "#64748B",
                      lineHeight: 1.5,
                    }}
                  >
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div
              className="p-5 rounded-lg"
              style={{
                background: "rgba(17, 24, 39, 0.8)",
                border: "1px solid rgba(0, 217, 255, 0.12)",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0, 217, 255, 0.08)",
                    border: "1px solid rgba(0, 217, 255, 0.2)",
                    fontSize: "1.2rem",
                  }}
                >
                  🎓
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#F1F5F9",
                    }}
                  >
                    BS Information Technology
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "#00D9FF",
                      marginTop: "2px",
                    }}
                  >
                    Polytechnic University of the Philippines
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      color: "#64748B",
                      marginTop: "4px",
                    }}
                  >
                    2018 – 2022
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "#64748B",
                      marginTop: "8px",
                      lineHeight: 1.6,
                    }}
                  >
                    Capstone: <strong style={{ color: "#94A3B8" }}>Barangay Information System</strong> — full-stack
                    web app built during COVID-19 to enable online resident services.
                    Java Servlets, HTML, CSS, Bootstrap.
                  </div>
                </div>
              </div>
            </div>

            {/* Certification badge */}
            <div
              className="p-4 rounded-lg flex items-center gap-3"
              style={{
                background: "rgba(34, 211, 238, 0.05)",
                border: "1px solid rgba(34, 211, 238, 0.2)",
              }}
            >
              <span className="text-xl">🏅</span>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: "#22D3EE",
                  }}
                >
                  NC II CSS Certified
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#64748B",
                  }}
                >
                  Computer Systems Servicing — Networking Certification
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
