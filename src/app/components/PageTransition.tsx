import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

export function PageTransition() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const keyRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    keyRef.current += 1;
    setActive(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActive(false), 800);
    return () => clearTimeout(timerRef.current);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={keyRef.current}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "1px",
            width: "100vw",
            background: "var(--c-fg)",
            zIndex: 9990,
            transformOrigin: "left center",
            pointerEvents: "none",
          }}
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
