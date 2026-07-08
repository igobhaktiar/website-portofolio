import { navLinks, profile } from '../data/portfolio.js';

/** Clean sticky top nav — monogram brand, links, and a single CTA. */
export default function StatusBar({ onOpenShowcase }) {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top">
          <span className="brand-mark">{profile.name[0]}</span>
          <span className="brand-name">{profile.name}</span>
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
        <a className="btn btn-primary nav-cta" href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  );
}
