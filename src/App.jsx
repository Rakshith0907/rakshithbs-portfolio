import { useState, useEffect } from "react";
import { NAV } from "./utils/ScrollReveal";
import "../src/styles/global.css"


import StarBackground from "./components/StarBackground/StarBackground";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            setActive(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.4 }
    );
    NAV.map((n) => n.toLowerCase()).forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "#050814", minHeight: "100vh" }}>
      <StarBackground />
      <Navbar active={active} />
      <Sidebar />
      <ScrollProgress />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Connect />
      <Footer />
      
    </div>
  );
}
