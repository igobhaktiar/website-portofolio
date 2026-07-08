import Reveal from './Reveal.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">The toolkit</span>
          <h2>What I build with.</h2>
          <p>
            Flutter-first, with native Android depth in Kotlin — plus the architecture
            and delivery skills to ship and maintain apps at scale.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Reveal className="skill-card" key={group.title}>
              <div className="skill-head">
                <h3>{group.title}</h3>
                <span className="count">{group.items.length}</span>
              </div>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item.label}>
                    {item.label}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
