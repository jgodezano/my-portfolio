/* ============================================================
   SkillsSection — Ops Dashboard Design
   Dashboard-widget grid with skill bars and category cards
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const SKILLS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663786263502/SxC5A5qdVn6tZPmLJ7sp6K/skills-bg-kfoBRHJviJCMLVBMnaNLuS.webp";

const skillCategories = [
  {
    title: "Monitoring & Observability",
    icon: "📊",
    color: "#00D9FF",
    skills: [
      { name: "Grafana", level: 85 },
      { name: "GCP Logs Explorer", level: 90 },
      { name: "Google Cloud Error Reporting", level: 88 },
      { name: "k9s", level: 85 },
      { name: "Dynatrace", level: 55 },
    ],
  },
  {
    title: "Containers & Kubernetes",
    icon: "🐳",
    color: "#3B82F6",
    skills: [
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 82 },
      { name: "Helm Charts", level: 78 },
      { name: "ConfigMaps & Secrets", level: 80 },
      { name: "k9s", level: 85 },
    ],
  },
  {
    title: "CI/CD & Version Control",
    icon: "🔄",
    color: "#8B5CF6",
    skills: [
      { name: "Jenkins", level: 82 },
      { name: "GitHub Actions", level: 85 },
      { name: "GitLab CI", level: 80 },
      { name: "Bitbucket Pipelines", level: 78 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    color: "#22D3EE",
    skills: [
      { name: "BigQuery", level: 80 },
      { name: "PostgreSQL / MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Oracle DB", level: 70 },
      { name: "Microsoft SQL Server", level: 75 },
    ],
  },
  {
    title: "Languages & Scripting",
    icon: "💻",
    color: "#F59E0B",
    skills: [
      { name: "JavaScript / Node.js", level: 85 },
      { name: "Bash / Linux CLI", level: 82 },
      { name: "HTML / CSS", level: 88 },
      { name: "PHP (Laravel)", level: 60 },
      { name: "Java (Servlets)", level: 65 },
    ],
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    color: "#EC4899",
    skills: [
      { name: "ChatGPT API Integration", level: 88 },
      { name: "Claude (Anthropic) API", level: 85 },
      { name: "Telegram Bot API", level: 90 },
      { name: "Puppeteer / Axios", level: 80 },
      { name: "Node.js Automation Scripts", level: 85 },
    ],
  },
];

const toolBadges = [
  "Jira", "Slack", "Service Desk", "GCP", "Ubuntu Linux",
  "REST API", "Vertex Play API", "Transfer Wallet API",
  "TCP/IP", "HTTP Traffic Analysis", "Grafana", "k9s",
];

function SkillBar({ name, level, color, animate }: { name: string; level: number; color: string; animate: boolean }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            color: "#94A3B8",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.7rem",
            color: color,
          }}
        >
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: animate ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
            transition: "width 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
      id="skills"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, rgba(11,15,26,0.98) 0%, rgba(17,24,39,0.98) 100%), url(${SKILLS_BG}) center/cover no-repeat`,
      }}
    >
      <div className="container relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="mono-label">03 // Skills</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,217,255,0.3), transparent)" }} />
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            color: "#F1F5F9",
            marginBottom: "0.75rem",
          }}
        >
          Technical{" "}
          <span style={{ color: "#00D9FF" }}>Arsenal</span>
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.95rem",
            color: "#64748B",
            marginBottom: "3rem",
          }}
        >
          Tools and technologies I use to keep systems running and teams productive.
        </p>

        {/* Skill category grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="p-5 rounded-lg"
              style={{
                background: "rgba(17, 24, 39, 0.7)",
                border: "1px solid rgba(255,255,255,0.06)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${i * 0.08}s`,
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = `${cat.color}30`;
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${cat.color}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{cat.icon}</span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: cat.color,
                  }}
                >
                  {cat.title}
                </span>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    animate={visible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tool badges */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.23,1,0.32,1) 0.5s",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "#64748B",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Also proficient with
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>
          <div className="flex flex-wrap gap-2">
            {toolBadges.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-full text-xs transition-all duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#64748B",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.background = "rgba(0,217,255,0.06)";
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(0,217,255,0.25)";
                  (e.currentTarget as HTMLSpanElement).style.color = "#00D9FF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLSpanElement).style.color = "#64748B";
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
