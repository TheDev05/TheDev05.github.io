import { useTheme } from "../context/ThemeContext";

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function DarkModeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      title={isDark ? "Switch to light" : "Switch to dark"}
      style={{
        position: "fixed",
        top: "2.4rem",
        right: "2.4rem",
        background: "none",
        border: "none",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--c-fg)",
        zIndex: 1000,
        opacity: 0.6,
        transition: "opacity 0.2s ease, color 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.6")}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
