import { useState, useEffect } from "react";
import "./ScrollProgress.css"
  
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div className="scroll-track">
        <div className="scroll-fill" style={{ height: `${pct}%` }} />
        <div className="scroll-dot" style={{ top: `calc(${pct}% - 5px)` }} />
      </div>
      {/* <span className="scroll-label">{Math.round(pct)}%</span> */}
    </div>
  );
}
