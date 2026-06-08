import { createContext, useContext, useLayoutEffect, useState } from "react";

interface ThemeCtx {
  isDark: boolean;
  toggle: () => void;
}

const Ctx = createContext<ThemeCtx>({ isDark: false, toggle: () => {} });

const lightVars: Record<string, string> = {
  "--c-bg": "#ffffff",
  "--c-fg": "#0a0a0a",
  "--c-muted": "#333333",
  "--c-faint": "#888888",
  "--c-border": "#e0e0e0",
  "--c-border-light": "#ebebeb",
  "--c-surface": "#fafafa",
};

const darkVars: Record<string, string> = {
  "--c-bg": "#0c0c0c",
  "--c-fg": "#eeeeee",
  "--c-muted": "#c0c0c0",
  "--c-faint": "#666666",
  "--c-border": "#2a2a2a",
  "--c-border-light": "#1e1e1e",
  "--c-surface": "#141414",
};

function applyVars(vars: Record<string, string>) {
  const root = document.documentElement;
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    applyVars(isDark ? darkVars : lightVars);
  }, [isDark]);

  return (
    <Ctx.Provider value={{ isDark, toggle: () => setIsDark((p) => !p) }}>
      {children}
    </Ctx.Provider>
  );
}

export const useTheme = () => useContext(Ctx);
