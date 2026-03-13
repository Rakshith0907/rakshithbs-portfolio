import { Reveal, Section, SectionTitle } from "../../utils/ScrollReveal";
import "./About.css"
import myimg from "../../assets/images/Me2.jpg"
 
const stats = [["3+", "Projects"], ["1", "Internship"], ["∞", "Curiosity"]];

export default function About() {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="about__grid">
        <Reveal dir="left">
          <div className="about__avatar">
            <img src={myimg} alt="" />
          </div>
        </Reveal>
        <Reveal dir="right" delay={150}>
          <div className="about__text">
            <p className="about__para about__para--highlight">
              I'm a passionate <span className="about__accent">Full Stack Developer</span> who loves
              building beautiful, performant web applications. From pixel-perfect UIs to robust
              backends — I enjoy every layer of the stack.
            </p>
            <p className="about__para">
              When I'm not coding, I explore modern frontend trends, contribute to open source, and chase
              the perfect cup of coffee ☕. I believe great software is where engineering meets artistry.
            </p>
            <div className="about__stats">
              {stats.map(([n, l]) => (
                <div key={l} className="about__stat">
                  <span className="about__stat-num">{n}</span>
                  <span className="about__stat-label">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
