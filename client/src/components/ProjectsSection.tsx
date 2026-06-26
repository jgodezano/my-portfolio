/* ============================================================
   ProjectsSection — Ops Dashboard Design
   Card grid with project images, tags, and hover effects
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const PROJECT_IMG_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663786263502/SxC5A5qdVn6tZPmLJ7sp6K/project-card-1-M2cwqCgZvA438bsTM6gJj9.webp";
const PROJECT_IMG_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663786263502/SxC5A5qdVn6tZPmLJ7sp6K/project-card-2-nAqVy35yMSntgFjjwLsj4z.webp";

const projects = [
  {
    title: "AI-Powered Support Telegram Bot",
    subtitle: "Internal Tool @ Flexicon Solution Inc.",
    description:
      "Built a Node.js Telegram chatbot integrated with ChatGPT and Claude APIs that lets support engineers query player accounts, transaction history, bet logs, and TXIDs in plain English — eliminating manual database lookups and significantly reducing resolution time.",
    image: PROJECT_IMG_1,
    color: "#00D9FF",
    tags: ["Node.js", "ChatGPT API", "Claude API", "Telegram Bot API", "Axios", "MongoDB"],
    highlights: [
      "Trained on internal API docs for plain-language Q&A",
      "Queries player data without manual DB access",
      "Reduced resolution time significantly",
    ],
    status: "Production",
    statusColor: "#22D3EE",
  },
  {
    title: "Kubernetes Platform Monitoring",
    subtitle: "Ops Engineering @ Flexicon Solution Inc.",
    description:
      "Implemented proactive monitoring for a live gaming platform using Grafana, k9s, and GCP Error Reporting. Built log filtering workflows in GCP Logs Explorer to detect session expiry errors, internal server failures, and suspicious HTTP patterns across distributed Kubernetes services.",
    image: PROJECT_IMG_2,
    color: "#3B82F6",
    tags: ["Kubernetes", "Grafana", "GCP Logs Explorer", "k9s", "BigQuery", "Docker"],
    highlights: [
      "Monitored 10+ microservices in real-time",
      "Detected service degradation before customer impact",
      "Identified unauthorized access patterns",
    ],
    status: "Active",
    statusColor: "#22D3EE",
  },
  {
    title: "Barangay Information System",
    subtitle: "Capstone Project — PUP",
    description:
      "Designed and developed a full-stack web application during the COVID-19 pandemic to enable barangay residents to process requests and transactions online, eliminating the need for in-person visits. Complete CRUD functionality for resident record management, document requests, and administrative operations.",
    image: null,
    color: "#8B5CF6",
    tags: ["Java Servlets", "HTML", "CSS", "Bootstrap", "MySQL", "CRUD"],
    highlights: [
      "Full-stack web app for government services",
      "Built during COVID-19 for contactless transactions",
      "Complete resident record management system",
    ],
    status: "Academic",
    statusColor: "#8B5CF6",
  },
  {
    title: "Node.js Automation Scripts",
    subtitle: "Internal Tools @ Flexicon Solution Inc.",
    description:
      "Wrote a suite of Node.js automation scripts using Axios and Puppeteer for repetitive support tasks — including log retrieval, transaction searches, and API call automation. Reduced manual overhead and improved team efficiency across support workflows.",
    image: null,
    color: "#F59E0B",
    tags: ["Node.js", "Puppeteer", "Axios", "Bash", "Linux CLI"],
    highlights: [
      "Automated log retrieval workflows",
      "Transaction search automation",
      "Reduced manual overhead for support team",
    ],
    status: "Production",
    statusColor: "#22D3EE",
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="projects"
      ref={ref}
      className="py-24"
      style={{ background: "#0B0F1A" }}
    >
      <div className="container">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="mono-label">04 // Projects</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,217,255,0.3), transparent)" }} />
        </div>

        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#F1F5F9",
            }}
          >
            Things I've{" "}
            <span style={{ color: "#00D9FF" }}>built & shipped</span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#64748B",
              maxWidth: "360px",
            }}
          >
            A mix of production tools, internal automation, and academic projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="rounded-lg overflow-hidden group transition-all duration-300"
              style={{
                background: "rgba(17, 24, 39, 0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${i * 0.1}s, border-color 0.2s, box-shadow 0.2s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${project.color}35`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${project.color}12`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Project image */}
              {project.image ? (
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 40%, rgba(17,24,39,0.95) 100%)`,
                    }}
                  />
                  {/* Status badge on image */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2 py-1 rounded-full text-xs flex items-center gap-1.5"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "rgba(11,15,26,0.8)",
                        border: `1px solid ${project.statusColor}40`,
                        color: project.statusColor,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          background: project.statusColor,
                          boxShadow: `0 0 4px ${project.statusColor}`,
                        }}
                      />
                      {project.status}
                    </span>
                  </div>
                </div>
              ) : (
                /* Placeholder with color gradient */
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    height: "120px",
                    background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
                    borderBottom: `1px solid ${project.color}15`,
                  }}
                >
                  <div
                    className="text-5xl opacity-20"
                    style={{ filter: `drop-shadow(0 0 20px ${project.color})` }}
                  >
                    {i === 2 ? "🏛️" : "⚙️"}
                  </div>
                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2 py-1 rounded-full text-xs flex items-center gap-1.5"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "rgba(11,15,26,0.8)",
                        border: `1px solid ${project.statusColor}40`,
                        color: project.statusColor,
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: project.statusColor }}
                      />
                      {project.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Card content */}
              <div className="p-5">
                <div className="mb-3">
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#F1F5F9",
                      marginBottom: "4px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      color: project.color,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {project.subtitle}
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.825rem",
                    color: "#64748B",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.775rem",
                        color: "#94A3B8",
                      }}
                    >
                      <span
                        className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full"
                        style={{ background: project.color }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: `${project.color}08`,
                        border: `1px solid ${project.color}20`,
                        color: "#64748B",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about more projects */}
        <div
          className="mt-8 p-4 rounded-lg text-center"
          style={{
            background: "rgba(0,217,255,0.03)",
            border: "1px dashed rgba(0,217,255,0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.875rem",
              color: "#64748B",
            }}
          >
            Have a project in mind?{" "}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ color: "#00D9FF", textDecoration: "none", background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Let's build it together →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
