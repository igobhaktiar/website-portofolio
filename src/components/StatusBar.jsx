import { useClock } from '../hooks/useClock.js';
import { navLinks } from '../data/portfolio.js';

/** Sticky status-bar-styled navigation with a live clock and signal glyphs. */
export default function StatusBar() {
  const clock = useClock();

  return (
    <header className="statusbar">
      <div className="wrap">
        <div className="clock">
          <span className="dot" />
          <span>{clock}</span>
        </div>
        <nav className="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="signal">
          <span className="bars">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className="battery">
            <b />
          </span>
          <a className="btn btn-primary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
