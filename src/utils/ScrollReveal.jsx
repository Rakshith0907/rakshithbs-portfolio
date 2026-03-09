import { useState, useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function Reveal({ children, dir = "up", delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  const transforms = {
    up: "translateY(50px)",
    down: "translateY(-50px)",
    left: "translateX(-50px)",
    right: "translateX(50px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : transforms[dir],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Section({ id, children }) {
  return (
    <section id={id} className="section-wrapper">
      {children}
    </section>
  );
}

export function SectionTitle({ children }) {
  return (
    <Reveal>
      <h2 className="section-title">
        <span className="section-title-slash">//</span>
        {children}
        <span className="section-title-line" />
      </h2>
    </Reveal>
  );
}

export const NAV = ["Home", "About", "Skills", "Projects", "Experience", "Connect"];
