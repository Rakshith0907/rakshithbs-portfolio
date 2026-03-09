import "./Footer.css";

const socials = [
  { name: "GitHub",    href: "https://github.com/Rakshith0907" },
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/rakshith-bs-ba404a25b/" },
  { name: "Instagram", href: "https://www.instagram.com/_rakshi_th_/" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__links">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="footer__link">
              {s.name}
            </a>
          ))}
        </div>
        <p className="footer__copy">
          Designed & Built with<span className="footer__name"> React<i className="fa-brands fa-react"></i></span> by <span className="footer__name">Rakshith BS</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
