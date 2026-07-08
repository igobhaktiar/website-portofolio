import Reveal from './Reveal.jsx';
import { profile, socials } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal className="wrap">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          Let's talk
        </span>
        <h2>Got an app to ship?</h2>
        <a className="mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.label}
              className={`btn ${s.primary ? 'btn-primary' : 'btn-ghost'}`}
              href={s.href}
              target="_blank"
              rel="noopener"
            >
              {s.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href={profile.resume}
            target="_blank"
            rel="noopener"
          >
            Résumé (PDF)
          </a>
        </div>
      </Reveal>
    </section>
  );
}
