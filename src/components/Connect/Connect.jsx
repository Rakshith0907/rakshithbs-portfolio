import { useState } from "react";
import { Reveal, Section, SectionTitle } from "../../utils/ScrollReveal";
import emailjs from "@emailjs/browser"
import "./Connect.css";


export default function Connect() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = () => {
    
    if (form.name && form.email && form.message){

      setSent(true);
      // console.log(form.name)
      // console.log(form.email)
      // console.log(form.message)
      // console.log(import.meta.env.VITE_EMAIL_SERVICE_ID)
      emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
    } 

    
  };

  return (
    <Section id="connect">
      <SectionTitle>Connect With Me</SectionTitle>
      <div className="connect__wrapper">
        {sent ? (
          <Reveal>
            <div className="connect__success">
              <span className="connect__success-icon">🚀</span>
              <h3 className="connect__success-title">Message Sent!</h3>
              <p className="connect__success-sub">
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="connect__form">
              <div className="connect__row">
                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handle}
                  className="connect__input"
                  onFocus={(e) =>
                    e.target.classList.add("connect__input--focus")
                  }
                  onBlur={(e) =>
                    e.target.classList.remove("connect__input--focus")
                  }
                />
                <input
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handle}
                  className="connect__input"
                  onFocus={(e) =>
                    e.target.classList.add("connect__input--focus")
                  }
                  onBlur={(e) =>
                    e.target.classList.remove("connect__input--focus")
                  }
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message..."
                value={form.message}
                onChange={handle}
                rows={6}
                className="connect__input connect__textarea"
                onFocus={(e) => e.target.classList.add("connect__input--focus")}
                onBlur={(e) =>
                  e.target.classList.remove("connect__input--focus")
                }
              />
              <button className="connect__btn" onClick={submit}>
                SEND MESSAGE
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
