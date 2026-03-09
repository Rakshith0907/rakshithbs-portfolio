import { useState } from "react";
import { Reveal, Section, SectionTitle } from "../../utils/ScrollReveal";
import "./Skills.css"
 
const SKILL_GROUPS = [
  {
    category: "Frontend", color: "#63b3ed",
    skills: [
      { name: "JavaScript",    color: "#F7DF1E", bg: "#1a1800", letter: <i className="fa-brands fa-js"></i> },
      { name: "React",         color: "#61DAFB", bg: "#001c22", letter: <i className="fa-brands fa-react"></i>  },
      { name: "Redux",         color: "#764ABC", bg: "#1a0e2a", letter: "⬡"  },
      { name: "Tailwind",      color: "#38BDF8", bg: "#001d2e", letter: "TW"},
      { name: "Framer Motion", color: "#FF4D8D", bg: "#2a0018", letter: "FM" },
      { name: "Bootstrap",     color: "#7952B3", bg: "#1a0b2e", letter: <i className="fa-brands fa-bootstrap"></i> },
    ],
  },
  {
    category: "Backend", color: "#9f7aea",
    skills: [
      { name: "Python",  color: "#3776AB", bg: "#001526", letter: <i className="fa-brands fa-python" ></i> },
      { name: "Node.js", color: "#68A063", bg: "#001a00", letter: <i className="fa-brands fa-node-js"></i> },
    ],
  },
  {
    category: "Database", color: "#68d391",
    skills: [
      { name: "MySQL",   color: "#4479A1", bg: "#001020", letter: <i className="fa-solid fa-database"></i> },
      { name: "MongoDB", color: "#47A248", bg: "#001500", letter: "Mg" },
    ],
  },
  {
    category: "Tools", color: "#f6ad55",
    skills: [
      { name: "Git",    color: "#F05032", bg: "#2a0800", letter: <i className="fa-brands fa-git-alt"></i> },
      { name: "AWS",    color: "#FF9900", bg: "#2a1800", letter: <i className="fa-brands fa-aws"></i> },
      { name: "Docker", color: "#2496ED", bg: "#001526", letter: <i className="fa-brands fa-docker"></i>  },
    ],
  },
];

function SkillCard({ skill, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="skill-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? "translateY(-6px)" : "translateY(0)", transitionDelay: `${delay}ms` }}
    >
      <div
        className="skill-card__icon"
        style={{
          background: skill.bg,
          color: skill.color,
          border: `1.5px solid ${hovered ? skill.color : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered ? `0 0 20px ${skill.color}55` : "none",
        }}
      >
        {skill.letter}
      </div>
      <span className="skill-card__name" style={{ color: hovered ? skill.color : "#718096" }}>
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle>My Skills</SectionTitle>
      <div className="skills__groups">
        {SKILL_GROUPS.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 80}>
            <div
              className="skills__group"
              style={{ border: `1px solid ${group.color}22` }}
            >
              <h3 className="skills__group-title" style={{ color: group.color }}>
                <span className="skills__group-bar" style={{ background: group.color }} />
                {group.category}
              </h3>
              <div className="skills__cards">
                {group.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 60} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
