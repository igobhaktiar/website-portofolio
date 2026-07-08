import Reveal from './Reveal.jsx';
import { profile, socials } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal className="wrap">
        <div className="contact-card">
          <span className="eyebrow">Let's talk</span>
          <h2>Got an app to ship?</h2>
          <p className="contact-sub">
            I'm open to mobile engineering roles and freelance builds — and quick to
            reply. Let's make something worth shipping.
          </p>
          <a className="mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="socials">
            {socials.map((s) => (
              <a
                key={s.label}
                className="btn btn-outline"
                href={s.href}
                target="_blank"
                rel="noopener"
              >
                {s.label}
              </a>
            ))}
            <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noopener">
              Download CV
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
