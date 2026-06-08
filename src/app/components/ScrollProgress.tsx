import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setPct(max > 0 ? scrollTop / max : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "1px",
        width: `${pct * 100}%`,
        background: "var(--c-fg)",
        zIndex: 9989,
        opacity: 0.2,
        pointerEvents: "none",
        transition: "width 0.06s linear",
      }}
    />
  );
}
