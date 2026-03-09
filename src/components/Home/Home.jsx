import { useState, useEffect } from "react";
import { Reveal } from "../../utils/ScrollReveal"
import "./Home.css"
 
const words = ["Full Stack Developer", "React Enthusiast", "Problem Solver"];

export default function Home() {
  const [wi, setWi] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = words[wi];
    let t;
    if (!deleting && displayed.length < target.length)
      t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    else if (!deleting && displayed.length === target.length)
      t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    else { setDeleting(false); setWi((wi + 1) % words.length); }
    return () => clearTimeout(t);
  });

  return (
    <section id="home" className="home">
      <div className="home__content">
        <Reveal delay={100}>
          <p className="home__greeting">Hello, World 👋</p>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="home__title">
            I'm <span className="home__name">Rakshith BS</span>
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <h2 className="home__typewriter">
            {displayed}
            <span className="home__cursor">&nbsp;</span>
          </h2>
        </Reveal>
        <Reveal delay={400}>
          <div className="home__buttons">
            <button
              className="btn btn--filled"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >View Projects</button>
            <button
              className="btn btn--outline"
              onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
            >Contact Me</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
