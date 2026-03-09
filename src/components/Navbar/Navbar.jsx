import { useState, useEffect } from "react";
import { NAV } from "../../utils/ScrollReveal"
import "./Navbar.css"
 
export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (s) => {
    document.getElementById(s.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <span className="navbar__logo">Rakshith's Portfolio</span>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => go(n)}
              className={`navbar__link ${active === n ? "navbar__link--active" : ""}`}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {NAV.map((n) => (
            <button key={n} onClick={() => go(n)} className="navbar__mobile-link">{n}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
