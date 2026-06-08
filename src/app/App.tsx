

import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { DetailPage } from "./components/DetailPage";
import { ThemeProvider } from "./context/ThemeContext";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { PageTransition } from "./components/PageTransition";

interface LinkDef {
  id: string;
  text: string;
  index: number;
  preview: string;
}


const LINKS: LinkDef[] = [
  {
    id: "experience",
    text: "2+ years of experience",
    index: 1,
    preview: "AI engineering across multi-agent, RAG & production backends.",
  },
  {
    id: "xyz-company",
    text: "Tata Consultancy Services",
    index: 2,
    preview: "AI Engineer at TCS — building agentic systems within the AuRA platform.",
  },
  {
    id: "projects",
    text: "projects",
    index: 3,
    preview: "Upskilling by building Agents in my free time.",
  },
  {
    id: "skills",
    text: "skills",
    index: 4,
    preview: "Python, LangChain, LangGraph, CrewAI, FastAPI, and more.",
  },
  {
    id: "resume",
    text: "resume",
    index: 5,
    preview: "Full arc — education, roles, stack, and outcomes.",
  },
  {
    id: "contact",
    text: "contact.",
    index: 6,
    preview: "Busy me, Usually responds within a day.",
  },
];

function getLinkDef(id: string): LinkDef {
  return LINKS.find((l) => l.id === id)!;
}

interface InlineLinkProps {
  id: string;
  onHoverStart: (preview: string) => void;
  onHoverEnd: () => void;
}

function InlineLink({ id, onHoverStart, onHoverEnd }: InlineLinkProps) {
  const navigate = useNavigate();
  const def = getLinkDef(id);

  return (
    <span
      data-link="true"
      onClick={() => navigate(`/${id}`)}
      onMouseEnter={() => onHoverStart(def.preview)}
      onMouseLeave={onHoverEnd}
      style={{
        borderBottom: "1.5px solid var(--c-fg)",
        display: "inline",
        transition: "opacity 0.15s ease",
      }}
      onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.35")}
      onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
    >
      {def.text}
      <sup
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.55em",
          color: "var(--c-muted)",
          marginLeft: "1px",
          fontWeight: 400,
          letterSpacing: 0,
        }}
      >
        {def.index}
      </sup>
    </span>
  );
}

function HomePage() {
  const [preview, setPreview] = useState<string | null>(null);

  const lp = (id: string) => ({
    id,
    onHoverStart: (p: string) => setPreview(p),
    onHoverEnd: () => setPreview(null),
  });

  return (
    <motion.div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--c-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        transition: "background-color 0.4s ease",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <article style={{ maxWidth: "620px", width: "100%" }}>

        {/* Dateline */}
        <motion.div
          style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          
           
        </motion.div>

        {/* Display headline */}
        <motion.h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(4rem, 12vw, 7.5rem)",
            fontWeight: 400,
            color: "var(--c-fg)",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            marginBottom: "2.5rem",
            transition: "color 0.4s ease",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          Hi.
        </motion.h1>

        {/* Rule */}
        <motion.div
          style={{
            width: "100%",
            height: "1px",
            background: "var(--c-border)",
            marginBottom: "2.5rem",
            transition: "background-color 0.4s ease",
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
        />

        {/* Body paragraph */}
        <motion.p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            fontWeight: 300,
            color: "var(--c-fg)",
            lineHeight: 1.9,
            transition: "color 0.4s ease",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {"I'm an AI Engineer with "}
          <InlineLink {...lp("experience")} />
          {" building agentic AI systems for enterprise. Currently at "}
          <InlineLink {...lp("xyz-company")} />
          {", designing multi-agent architectures for BFSI clients. My "}
          <InlineLink {...lp("projects")} />
          {" range from ITSM agents to hackathon builds. I care about "}
          <InlineLink {...lp("skills")} />
          {" that hold up under real workloads. My "}
          <InlineLink {...lp("resume")} />
          {" is available on request. "}
          <InlineLink {...lp("contact")} />
        </motion.p>

        {/* Hover preview caption */}
        <div style={{ minHeight: "3rem", marginTop: "2rem" }}>
          <AnimatePresence mode="wait">
            {preview && (
              <motion.p
                key={preview}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 300,
                  color: "var(--c-faint)",
                  lineHeight: 1.6,
                  paddingTop: "1.25rem",
                  borderTop: "1px solid var(--c-border-light)",
                }}
              >
                {preview}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

      </article>

      {/* Footer */}
      <motion.footer
        style={{
          position: "fixed",
          bottom: "2.5rem",
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {[
            {
              href: "https://github.com/thedev05",
              label: "GitHub",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              ),
            },
            {
              href: "https://linkedin.com/in/whereisankit",
              label: "LinkedIn",
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              href: "mailto:a.singh725098@gmail.com",
              label: "Gmail",
              icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              ),
            },
            {
              href: "https://instagram.com/thedev05",
              label: "Instagram",
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              ),
            },
            {
              href: "https://leetcode.com/thedev05",
              label: "LeetCode",
              icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              ),
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={label}
              style={{
                color: "var(--c-faint)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
                transition: "opacity 0.2s ease, color 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.5")}
            >
              {icon}
            </a>
          ))}
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          color: "var(--c-faint)",
          opacity: 1,
          fontWeight: 300,
        }}>
          thedev05
        </p>
      </motion.footer>

    </motion.div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          background-color: var(--c-bg, #ffffff);
          color: var(--c-fg, #0a0a0a);
          transition: background-color 0.4s ease, color 0.4s ease;
        }
        ::selection {
          background: var(--c-fg, #0a0a0a);
          color: var(--c-bg, #ffffff);
        }
      `}</style>
      <BrowserRouter>
        <DarkModeToggle />
        <PageTransition />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
