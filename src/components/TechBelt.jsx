import { techBelt } from '../data/portfolio.js';

/** A clean, static "core stack" strip beneath the hero. */
export default function TechBelt() {
  return (
    <div className="stack-strip">
      <div className="wrap">
        <span className="stack-label">Core stack</span>
        <div className="stack-tags">
          {techBelt.map((t) => (
            <span className="chip" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
