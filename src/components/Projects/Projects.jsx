import { useState, useEffect } from "react";
import { Reveal, Section, SectionTitle } from "../../utils/ScrollReveal";
import "./Projects.css"
 
const PROJECTS = [
  {
    name: "Laptop Price Prediction",
    desc: "ML-powered app predicting laptop prices from specs using Django and scikit-learn, trained on 1300+ data points.",
    tech: ["Django", "Python", "ML", "scikit-learn"],
    img: "dist/assets/images/laptop-pp-mac.jpg",
  },
  {
    name: "Expense Tracker",
    desc: "Smart expense tracker with category filters, and budget alerts built with vanilla JavaScript.",
    tech: ["JavaScript", "HTML", "CSS"],
    img: "dist/assets/images/Expense tracker.png",
  },
  {
    name: "Simple Digital Clock",
    desc: "A simple digital clock built using JavaScript that dynamically displays the current time in hours, minutes, and seconds, updating every second in real-time.",
    tech: ["Javascript", "CSS", "HTML"],
    img: "dist/assets/images/Digi-clock.png",
  },
  // {
  //   name: "Cloud File Manager",
  //   desc: "Drag-and-drop file manager with AWS S3 integration, folder structure, and one-click shareable links.",
  //   tech: ["React", "AWS S3", "Node.js", "MongoDB"],
  //   img: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&q=80",
  // },
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <Section id="projects">
      <SectionTitle>Projects</SectionTitle>
      <div className="projects__layout">
        {/* List */}
        <div className="projects__list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <div
                className={`project-item ${hoveredIdx === i ? "project-item--active" : ""}`}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="project-item__header">
                  <span className="project-item__num">{String(i + 1).padStart(2, "0")}.</span>
                  <h3 className="project-item__name">{p.name}</h3>
                </div>
                <p className="project-item__desc">{p.desc}</p>
                <div className="project-item__tags">
                  {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* Mobile image */}
                {isMobile && (
                  <div className="project-item__img-mobile">
                    <img src={p.img} alt={p.name} />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Desktop hover image */}
        {!isMobile && (
          <div className="projects__preview">
            {hoveredIdx !== null ? (
              <img
                key={hoveredIdx}
                src={PROJECTS[hoveredIdx].img}
                alt={PROJECTS[hoveredIdx].name}
                className="projects__preview-img"
              />
            ) : (
              <span className="projects__preview-hint"></span>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
