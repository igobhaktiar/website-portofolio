import { techBelt } from '../data/portfolio.js';

/** Auto-scrolling marquee of technologies (list doubled for a seamless loop). */
export default function TechBelt() {
  const items = [...techBelt, ...techBelt];

  return (
    <div className="belt" aria-label="Technologies">
      <div className="belt-track">
        {items.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
