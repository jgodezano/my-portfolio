/* ============================================================
   ExperienceSection — Ops Dashboard Design
   Vertical timeline with card-style entries
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Application Support Engineer (L2)",
    company: "Flexicon Solution Inc.",
    period: "2025 – 2026",
    type: "Full-time",
    color: "#00D9FF",
    icon: "🚀",
    tags: ["Kubernetes", "GCP", "Node.js", "Docker", "Jenkins", "Jira", "AI Bots"],
    bullets: [
      "Handled escalated tickets from L1, independently investigated platform-specific incidents, and engaged L3 engineers for deep backend issues tracked in Jira.",
      "Proactively monitored live gaming platform health using Grafana, k9s, and Google Cloud Error Reporting — detecting service degradation before customer impact.",
      "Investigated API errors end-to-end by pulling logs, querying BigQuery, and cross-referencing SQL and MongoDB across gamebridge, platformbridge, and third-party game providers (Casino Plus, JILI, Vertex Play, JDB).",
      "Built AI-powered Telegram chatbots using Node.js integrated with ChatGPT/Claude API — enabling the support team to query player accounts, transactions, and bet logs without manual database lookups.",
      "Added an AI layer trained on internal API documentation, allowing teammates to ask plain-language questions about wallet flows and error codes.",
      "Managed CI/CD pipelines via Jenkins, GitHub Actions, GitLab CI, and Bitbucket; updated Kubernetes Helm charts, ConfigMaps, and Secrets for deployments.",
      "Wrote Node.js automation scripts using Axios and Puppeteer for log retrieval and transaction searches, improving team efficiency.",
    ],
  },
  {
    role: "System Support Analyst",
    company: "Nephila Web",
    period: "2023",
    type: "Full-time",
    color: "#3B82F6",
    icon: "🖥️",
    tags: ["Ubuntu Linux", "MSSQL", "LAMP Stack", "DragonPay", "SIS"],
    bullets: [
      "Provided Tier 2 technical support for multiple schools on a School Information System (SIS) platform — Accounting, Finance, Enrollment, Student Portal, and Registration modules.",
      "Investigated and resolved payment discrepancies involving DragonPay integrations, tracing data mismatches between payment records and the accounting system.",
      "Collaborated with senior developers to diagnose and fix bugs, including pushing hotfixes directly to production via the LAMP stack.",
      "Administered Ubuntu Linux servers and Microsoft SQL databases concurrently while managing multiple client issues.",
    ],
  },
  {
    role: "Email Campaign Specialist",
    company: "Alchemy Worx",
    period: "2022 – 2025",
    type: "Full-time",
    color: "#8B5CF6",
    icon: "📧",
    tags: ["HTML", "CSS", "JavaScript", "Klaviyo", "Mailchimp", "A/B Testing"],
    bullets: [
      "Developed responsive HTML/CSS/JavaScript email templates and managed end-to-end campaign execution on Klaviyo and Mailchimp.",
      "Conducted A/B testing and performance optimization for email campaigns.",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24"
      style={{ background: "#111827" }}
    >
      <div className="container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="mono-label">02 // Experience</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,217,255,0.3), transparent)" }} />
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "#F1F5F9",
            marginBottom: "3rem",
          }}
        >
          Where I've{" "}
          <span style={{ color: "#00D9FF" }}>shipped work</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, rgba(0,217,255,0.4), rgba(0,217,255,0.05))" }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s cubic-bezier(0.23,1,0.32,1) ${i * 0.12}s, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${i * 0.12}s`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 w-3 h-3 rounded-full hidden md:block"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 10px ${exp.color}80`,
                    zIndex: 1,
                  }}
                />

                {/* Card */}
                <div
                  className="md:ml-14 rounded-lg overflow-hidden transition-all duration-300"
                  style={{
                    background: "rgba(11, 15, 26, 0.8)",
                    border: `1px solid ${expanded === i ? exp.color + "40" : "rgba(255,255,255,0.06)"}`,
                    boxShadow: expanded === i ? `0 0 20px ${exp.color}15` : "none",
                  }}
                >
                  {/* Card header */}
                  <button
                    className="w-full text-left p-5"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <span className="text-xl mt-0.5">{exp.icon}</span>
                        <div>
                          <div
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontWeight: 700,
                              fontSize: "1rem",
                              color: "#F1F5F9",
                            }}
                          >
                            {exp.role}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.875rem",
                                color: exp.color,
                                fontWeight: 500,
                              }}
                            >
                              {exp.company}
                            </span>
                            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                            <span
                              style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.75rem",
                                color: "#64748B",
                              }}
                            >
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className="px-2 py-0.5 rounded-full text-xs"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            background: `${exp.color}15`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                        <span
                          style={{
                            color: "#64748B",
                            transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s",
                            fontSize: "0.75rem",
                          }}
                        >
                          ▼
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "#64748B",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>

                  {/* Expanded bullets */}
                  {expanded === i && (
                    <div
                      className="px-5 pb-5"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <ul className="mt-4 space-y-3">
                        {exp.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.875rem",
                              color: "#64748B",
                              lineHeight: 1.7,
                            }}
                          >
                            <span
                              className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                              style={{ background: exp.color, boxShadow: `0 0 6px ${exp.color}` }}
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
