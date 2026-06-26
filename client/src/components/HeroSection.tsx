/* ============================================================
   HeroSection — Ops Dashboard Design
   Left-weighted asymmetric layout
   Animated headline, status dot, terminal-style code block
   ============================================================ */
import { useEffect, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663786263502/SxC5A5qdVn6tZPmLJ7sp6K/hero-bg-PGdFHm677jwNRNrobC2ZR5.webp";

const roles = [
  "L2 Support Specialist",
  "Application Support Engineer",
  "IT Operations Engineer",
  "AI Chatbot Builder",
];

const terminalLines = [
  { prefix: "$ ", text: "kubectl get pods --all-namespaces", color: "#94A3B8" },
  { prefix: "✓ ", text: "All pods running — 0 errors detected", color: "#22D3EE" },
  { prefix: "$ ", text: "node telegram-bot.js --env=production", color: "#94A3B8" },
  { prefix: "✓ ", text: "AI Bot online — ChatGPT/Claude integrated", color: "#22D3EE" },
  { prefix: "$ ", text: "git push origin main && deploy", color: "#94A3B8" },
  { prefix: "✓ ", text: "Pipeline complete — 0 vulnerabilities", color: "#22D3EE" },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect for roles
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Terminal lines appear one by one
  useEffect(() => {
    if (terminalStep < terminalLines.length) {
      const t = setTimeout(() => setTerminalStep((s) => s + 1), 600);
      return () => clearTimeout(t);
    }
  }, [terminalStep]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(11,15,26,0.97) 0%, rgba(11,15,26,0.85) 60%, rgba(17,24,39,0.9) 100%), url(${HERO_BG}) center/cover no-repeat`,
      }}
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left cyan accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{
          background: "linear-gradient(to bottom, transparent, #00D9FF, transparent)",
          opacity: 0.4,
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div
            className="space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)",
            }}
          >
            {/* Status badge */}
            <div className="flex items-center gap-2">
              <div className="status-dot" />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "#22D3EE",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Available for opportunities
              </span>
            </div>

            {/* Main headline */}
            <div>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8rem",
                  color: "#00D9FF",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                // Hello, I'm
              </p>
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: 1.1,
                  color: "#F1F5F9",
                  letterSpacing: "-0.02em",
                }}
              >
                Jessie E.{" "}
                <span style={{ color: "#00D9FF", textShadow: "0 0 30px rgba(0,217,255,0.4)" }}>
                  Godezano
                </span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "#94A3B8",
                minHeight: "2rem",
              }}
            >
              <span style={{ color: "#F1F5F9" }}>{displayed}</span>
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.2em",
                  background: "#00D9FF",
                  marginLeft: "2px",
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </div>

            {/* Summary */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "#64748B",
                maxWidth: "520px",
              }}
            >
              3+ years keeping production systems alive — from triaging escalated incidents
              and tracing API failures across Kubernetes clusters, to building AI-powered
              Telegram bots that cut resolution time by eliminating manual database lookups.
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "L2", label: "Support Level" },
                { value: "GCP", label: "Cloud Platform" },
                { value: "AI", label: "Bot Builder" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2 rounded"
                  style={{
                    background: "rgba(0, 217, 255, 0.06)",
                    border: "1px solid rgba(0, 217, 255, 0.2)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#00D9FF",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "#64748B",
                      marginLeft: "6px",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                className="btn-cyan px-6 py-3 rounded text-sm font-bold"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Projects →
              </button>

              <a
                href="https://linkedin.com/in/jessie-e-godezano-2648a2246"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded text-sm font-semibold transition-all duration-200"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#64748B",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F1F5F9";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#64748B";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: Terminal block */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.9s cubic-bezier(0.23,1,0.32,1) 0.2s, transform 0.9s cubic-bezier(0.23,1,0.32,1) 0.2s",
            }}
          >
            <div
              className="rounded-lg overflow-hidden"
              style={{
                background: "rgba(17, 24, 39, 0.8)",
                border: "1px solid rgba(0, 217, 255, 0.2)",
                boxShadow: "0 0 40px rgba(0, 217, 255, 0.08), 0 20px 60px rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Terminal title bar */}
              <div
                className="flex items-center gap-2 px-4 py-3"
                style={{
                  background: "rgba(0, 217, 255, 0.04)",
                  borderBottom: "1px solid rgba(0, 217, 255, 0.1)",
                }}
              >
                <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                <span
                  className="ml-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#64748B",
                  }}
                >
                  jessie@ops-terminal ~ production
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-5 space-y-2" style={{ minHeight: "280px" }}>
                {terminalLines.slice(0, terminalStep).map((line, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2"
                    style={{
                      opacity: 0,
                      animation: `fadeIn 0.3s ease-out ${i * 0.05}s forwards`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.8rem",
                        color: line.color,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {line.prefix}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.8rem",
                        color: line.prefix === "$ " ? "#94A3B8" : line.color,
                        wordBreak: "break-all",
                      }}
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
                {terminalStep < terminalLines.length && (
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.8rem",
                        color: "#94A3B8",
                      }}
                    >
                      $
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        width: "8px",
                        height: "14px",
                        background: "#00D9FF",
                        animation: "blink 1s step-end infinite",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Tech stack pills below terminal */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Kubernetes", "Docker", "GCP", "Node.js", "Grafana", "Jenkins", "PostgreSQL", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: "rgba(0, 217, 255, 0.05)",
                    border: "1px solid rgba(0, 217, 255, 0.15)",
                    color: "#64748B",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: visible ? 0.6 : 0, transition: "opacity 1s 1s" }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#64748B",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, #00D9FF, transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}
