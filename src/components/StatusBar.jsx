import { navLinks, profile } from '../data/portfolio.js';

/** Sticky, minimal top nav — brand mark, links, and a single CTA. */
export default function StatusBar({ onOpenShowcase }) {
  return (
    <header className="statusbar">
      <div className="wrap">
        <a className="brand" href="#top">
          {profile.name.split(' ')[0]}
          <span className="accent">.</span>
          <span className="brand-role">{profile.role}</span>
        </a>
        <nav className="navlinks">
          {navLinks.map((link) =>
            link.action === 'showcase' ? (
              <button key={link.label} type="button" className="navbtn" onClick={onOpenShowcase}>
                {link.label}
              </button>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            )
          )}
        </nav>
        <a className="btn btn-primary" href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  );
}
