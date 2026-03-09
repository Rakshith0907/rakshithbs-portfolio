import { Reveal, Section, SectionTitle } from "../../utils/ScrollReveal";
import "./Experience.css"

const bullets = [
  "Built full-stack web features using Angular and SpringBoot",
  "Integrated REST APIs and optimized database queries",
  "Collaborated in an agile team on research tools",
  "Gained hands-on experience with cloud deployment workflows",
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="experience__timeline">
        <div className="experience__line" />
        <Reveal>
          <div className="experience__item">
            <div className="experience__dot" />
            <div className="experience__card">
              <div className="experience__card-header">
                <div>
                  <h3 className="experience__role">Full Stack Intern</h3>
                  <p className="experience__company">CSIR-NAL (National Aerospace Laboratories)</p>
                </div>
                <span className="experience__date">March 2024 – May 2024</span>
              </div>
              <ul className="experience__bullets">
                {bullets.map((item, i) => (
                  <li key={i} className="experience__bullet">
                    <span className="experience__bullet-icon">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
