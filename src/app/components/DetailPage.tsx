import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ScrollProgress } from "./ScrollProgress";

/* ─── shared micro-styles ───────────────────────────────────────── */
const label: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.68rem",
  fontWeight: 500,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
  color: "var(--c-faint)",
};

const serif = (size = "1.25rem"): React.CSSProperties => ({
  fontFamily: "'DM Serif Display', serif",
  fontSize: size,
  fontWeight: 400,
  color: "var(--c-fg)",
  transition: "color 0.4s ease",
});

const sans = (size = "0.95rem", weight = 300): React.CSSProperties => ({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: size,
  fontWeight: weight,
  color: "var(--c-muted)",
  lineHeight: 1.8,
  transition: "color 0.4s ease",
});

const rule: React.CSSProperties = {
  flex: 1,
  height: "1px",
  background: "var(--c-border-light)",
  transition: "background-color 0.4s ease",
};

/* ─── Timeline entry (shared by Experience + Projects) ──────────── */
interface TimelineEntry {
  period: string;
  title: string;
  subtitle?: string;
  techLabel?: string;
  tech?: string;
  bullets: string[];
}

function TimelineItem({ entry, last }: { entry: TimelineEntry; last: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1px 1fr",
        gap: "0 2rem",
        paddingBottom: last ? 0 : "3.5rem",
      }}
    >
      {/* Spine */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "1px", height: "10px", background: "var(--c-border)" }} />
        <div style={{
          width: "7px", height: "7px", borderRadius: "50%",
          background: "var(--c-fg)", flexShrink: 0, marginLeft: "-3px",
          transition: "background-color 0.4s ease",
        }} />
        <div style={{ width: "1px", flex: 1, background: "var(--c-border)", transition: "background-color 0.4s ease" }} />
      </div>

      {/* Content */}
      <div style={{ paddingTop: "6px" }}>
        <p style={{ ...label, marginBottom: "0.6rem" }}>{entry.period}</p>
        <p style={{ ...serif("1.3rem"), marginBottom: entry.subtitle ? "0.2rem" : "1.2rem" }}>{entry.title}</p>
        {entry.subtitle && (
          <p style={{ ...sans("0.8rem"), color: "var(--c-faint)", marginBottom: "1.2rem" }}>{entry.subtitle}</p>
        )}
        {entry.tech && (
          <>
            <p style={{ ...label, marginBottom: "0.35rem" }}>{entry.techLabel ?? "Tech"}</p>
            <p style={{ ...sans("0.88rem"), color: "var(--c-muted)", marginBottom: "1.4rem" }}>{entry.tech}</p>
          </>
        )}
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {entry.bullets.map((b, j) => (
            <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span style={{
                width: "4px", height: "4px", borderRadius: "50%",
                background: "var(--c-border)", flexShrink: 0, marginTop: "0.58rem",
                transition: "background-color 0.4s ease",
              }} />
              <span style={sans()}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Section data ───────────────────────────────────────────────── */
interface Section {
  id: string;
  label: string;
  intro: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "experience",
    label: "Experience",
    intro: "Building agentic AI systems that transform manual enterprise workflows into scalable multi-agent architectures — from design to production deployment within TCS's centralized AI platform.",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {(
          [
            {
              period: "October 2025 — Present",
              title: "Tata Consultancy Services",
              subtitle: "AI Engineer · BFSI CBO AI COE · Bengaluru, IN",
              tech: "LangGraph · LangChain · RAG · MCP · FastAPI · Python",
              bullets: [
                "Designed and delivered agentic AI solutions across multiple BFSI towers by redesigning manual workflows into multi-agent architectures, improving context-window efficiency and tool-invocation accuracy.",
                "Architected multi-agent workflows involving task decomposition, tool invocation, context management, and inter-agent coordination for scalable enterprise systems.",
                "Leveraged LangGraph and LangChain to implement stateful, collaborative agent systems, later productized into the AuRA (AI Unified Response Agents) platform.",
                "Contributed to AuRA by standardizing reusable agent patterns and reference architectures, enabling cross-tower reuse and faster onboarding of new AI use cases.",
              ],
            },
            {
              period: "May 2024 — September 2024",
              title: "Protolabz Eservices",
              subtitle: "Software Engineer - Intern",
              tech: "ReactJs · NodeJs · MongoDB · C# · HTML",
              bullets: [
                "Built an end-to-end OCR and layout-parsing pipeline processing 500+ PDFs daily — contracts, reports, and multilingual forms.",
                "Developed a semantic chunking strategy respecting document structure, increasing retrieval precision by 28% over naive character splitting.",
                "Integrated a citation layer into the RAG output so every answer traces back to a specific page and section of the source document.",
                "Containerised and shipped the pipeline on Azure with a CI/CD workflow, reducing deployment cycles from weekly to on-demand.",
              ],
            },
          ] as TimelineEntry[]
        ).map((e, i, arr) => (
          <TimelineItem key={i} entry={e} last={i === arr.length - 1} />
        ))}
      </div>
    ),
  },
  {
    id: "xyz-company",
    label: "TCS — BFSI CBO AI COE",
    intro: "Tata Consultancy Services, BFSI Center of Excellence for AI. Specializing in building and standardizing agentic AI systems productized within the AuRA platform for cross-tower and client deployment.",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <p style={sans()}>AI Engineer within the BFSI CBO AI Center of Excellence at TCS, Bengaluru. The role sits at the intersection of AI research and enterprise engineering — designing systems that actually ship to production.</p>
        <p style={sans()}>Day-to-day involves redesigning manual BFSI workflows into multi-agent architectures, contributing to the AuRA platform, and establishing reusable agent patterns that other towers can adopt without starting from scratch.</p>
        <p style={sans()}>The environment moves quickly across multiple client verticals, which demands strong opinions on when to reach for a framework versus owning the abstraction directly.</p>
      </div>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    intro: "From ITSM agentic assistants to competitive hackathon builds — each project started with a real constraint and ended with something that runs in production, not a demo.",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {(
          [
            {
              period: "November 2025",
              title: "ORBIT — ITSM Agent",
              tech: "LangChain · LangGraph · MCP · RAG · FastAPI",
              bullets: [
                "Built an agentic AI assistant for IT Service Management using LangGraph and LangChain, orchestrating multi-step workflows for ticket creation, retrieval, and issue resolution.",
                "Integrated MCP-based ServiceNow tools to enable secure, programmatic incident management, supporting hybrid workflows combining local tools and external enterprise systems.",
                "Implemented persistent memory and state management using LangGraph Store, checkpointing, and Redis, ensuring session continuity and conversation recovery across restarts.",
                "Enforced domain-specific safety guardrails using NVIDIA NeMo Guardrails and Microsoft Presidio, restricting responses strictly to ITSM queries and preventing sensitive or out-of-scope interactions.",
              ],
            },
            {
              period: "Hackathon · 5 hours",
              title: "ShapeYou — Medical Agentic Assistant",
              tech: "LangChain · FastAPI · Python",
              bullets: [
                "Built a medical agentic assistant end-to-end within 3 hours at the TCS AI Hackathon, securing 3rd place overall.",
                "Designed a multi-turn conversation flow with domain-specific guardrails to keep interactions medically relevant.",
                "Integrated tool-calling for real-time health data lookup and personalised recommendation generation.",
                "Prioritised response latency and safety filters under hackathon time constraints without sacrificing accuracy.",
              ],
            },
          ] as TimelineEntry[]
        ).map((e, i, arr) => (
          <TimelineItem key={i} entry={e} last={i === arr.length - 1} />
        ))}
      </div>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    intro: "The stack that holds up under real workloads. Covers the full pipeline — language models, retrieval systems, backend infrastructure, and the engineering practices that keep it all reliable.",
    content: (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2.5rem 4rem" }}>
        {[
          { category: "Programming Languages", items: ["Python", "C++"] },
          { category: "Agentic AI Stack", items: ["LangChain", "LangGraph", "CrewAI", "Model Context Protocol"] },
          { category: "Generative AI & RAG", items: ["RAG", "CRAG", "LlamaIndex", "LangExtract", "Pinecone"] },
          { category: "ML / DL Stack", items: ["Scikit-learn", "TensorFlow", "PyTorch", "NLP", "Classification", "Regression"] },
          { category: "Backend & APIs", items: ["FastAPI", "Pydantic", "RESTful APIs"] },
        ].map((group, i) => (
          <div key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
              <p style={label}>{group.category}</p>
              <div style={rule} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.items.map((item, j) => (
                <span key={j} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.83rem",
                  fontWeight: 300,
                  color: "var(--c-fg)",
                  padding: "0.3rem 0.75rem",
                  border: "1px solid var(--c-border)",
                  lineHeight: 1.5,
                  transition: "color 0.4s ease, border-color 0.4s ease",
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "research-and-learning",
    label: "Research & Learning",
    intro: "Keeping pace with AI research means filtering aggressively. Reading habits lean toward architecture papers, alignment work, and engineering post-mortems — the kind that explain what actually broke.",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <p style={sans()}>Keeping pace with AI research means filtering aggressively — most benchmark improvements don't survive contact with real workloads.</p>
        <p style={sans()}>Reading habits lean toward architecture papers, alignment work, and the kind of engineering post-mortems that explain what actually broke. Arxiv, papers with code, and the occasional deep-dive into framework internals.</p>
        <p style={sans()}>The most valuable learning still happens by building something, breaking it, and understanding exactly why.</p>
      </div>
    ),
  },
  {
    id: "resume",
    label: "Resume",
    intro: "Covers the full arc — education, roles, projects, and the stack behind each one. Formatted to be read by a human. Place your resume.pdf file in the /public folder to enable the viewer.",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "680px" }}>
        {/* PDF viewer — replace RESUME_URL with your hosted PDF link */}
        {(() => {
          const RESUME_URL = "https://drive.google.com/file/d/1Hay7YunDCk25kPCrlD_18fXywu65uKWO/preview";
          const isPlaceholder = RESUME_URL.includes("YOUR_FILE_ID");
          return (
            <div style={{
              width: "100%",
              aspectRatio: "210 / 297",
              border: "1px solid var(--c-border)",
              background: "var(--c-surface)",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.4s ease, background-color 0.4s ease",
            }}>
              {isPlaceholder ? (
                <div style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.25rem",
                }}>
                  <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
                    <rect x="1" y="1" width="34" height="42" rx="2" stroke="var(--c-border)" strokeWidth="1.2" />
                    <path d="M9 14h18M9 20h18M9 26h12" stroke="var(--c-border)" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <p style={{ ...sans("0.78rem"), color: "var(--c-faint)", textAlign: "center", maxWidth: "220px", lineHeight: 1.7 }}>
                    Replace <code style={{ fontFamily: "monospace", fontSize: "0.73rem" }}>RESUME_URL</code> in DetailPage.tsx with your Google Drive preview link.
                  </p>
                </div>
              ) : (
                <iframe
                  src={RESUME_URL}
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                  allow="autoplay"
                  title="Ankit Raj — Resume"
                />
              )}
            </div>
          );
        })()}

        {/* Actions row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ ...sans("0.78rem"), color: "var(--c-faint)" }}>Ankit R. — AI Engineer</p>
          <a
            href="/resume.pdf"
            download
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 400,
              color: "var(--c-fg)",
              textDecoration: "none",
              borderBottom: "1px solid var(--c-fg)",
              letterSpacing: "0.04em",
              paddingBottom: "1px",
              transition: "opacity 0.15s ease, color 0.4s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.4")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            Download PDF
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    intro: "Open to conversations about interesting problems, collaborations, and roles. Response time is usually within a day.",
    content: (
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        <p style={{ ...sans(), color: "var(--c-muted)" }}>
          Open to conversations about interesting problems, collaborations, and roles. Response time is usually within a day.
        </p>
        {[
          { label: "Email", value: "a.singh725098@example.com", href: "mailto:a.singh725098@example.com" },
          { label: "Phone", value: "+91 77648 97552", href: "tel:+917764897552" },
          { label: "LinkedIn", value: "linkedin.com/in/whereisankit", href: "https://linkedin.com" },
          { label: "GitHub", value: "github.com/thedev05", href: "https://github.com" },
          { label: "Location", value: "Bengaluru, India", href: "https://maps.google.com/?q=Bengaluru,India" },
        ].map((row, i) => (
          <div key={i}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.65rem" }}>
              <p style={label}>{row.label}</p>
              <div style={rule} />
            </div>
            <a
              href={row.href}
              target={row.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              data-link="true"
              style={{
                ...serif("1.1rem"),
                textDecoration: "none",
                borderBottom: "1px solid transparent",
                transition: "border-color 0.15s ease, color 0.4s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderBottomColor = "var(--c-fg)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderBottomColor = "transparent")}
            >
              {row.value}
            </a>
          </div>
        ))}
      </div>
    ),
  },
];

export function getSectionById(id: string): Section | undefined {
  return sections.find((s) => s.id === id);
}

/* ─── Page component ─────────────────────────────────────────────── */
export function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const section = getSectionById(id ?? "");

  if (!section) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--c-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={sans()}>Not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      style={{ minHeight: "100vh", backgroundColor: "var(--c-bg)", transition: "background-color 0.4s ease" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <ScrollProgress />

      {/* Back arrow */}
      <button
        onClick={() => navigate("/")}
        aria-label="Go back"
        data-link="true"
        style={{
          position: "fixed",
          top: "2.4rem",
          left: "2.4rem",
          background: "none",
          border: "none",
          padding: 0,
          display: "flex",
          alignItems: "center",
          color: "var(--c-fg)",
          opacity: 0.25,
          transition: "opacity 0.2s ease, color 0.4s ease",
          zIndex: 100,
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.25")}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Content */}
      <div style={{ maxWidth: "100%", padding: "8rem 6vw 6rem" }}>

        {/* Eyebrow + date + author on same row */}
        <motion.div
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.4 }}
        >
          <p style={label}>Ankit Raj</p>
          <p style={{ ...label, fontSize: "0.62rem" }}>
            Last updated by TheDev05 · <span style={{ opacity: 0.6 }}>{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          </p>
        </motion.div>

        {/* Title */}
        <motion.h1
          style={{ ...serif("2.2rem"), lineHeight: 1.15, marginBottom: "1.5rem", maxWidth: "720px" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.4 }}
        >
          {section.label}
        </motion.h1>

        {/* Intro */}
        <motion.p
          style={{
            ...sans("1.05rem"),
            color: "var(--c-muted)",
            lineHeight: 1.8,
            marginBottom: "3rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px solid var(--c-border-light)",
            maxWidth: "640px",
          }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.17, duration: 0.4 }}
        >
          {section.intro}
        </motion.p>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.45 }}
        >
          {section.content}
        </motion.div>

      </div>
    </motion.div>
  );
}
