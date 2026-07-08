import Reveal from './Reveal.jsx';
import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section
      className="section"
      id="skills"
      style={{ background: 'var(--ink-2)', borderBlock: '1px solid var(--line)' }}
    >
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">The toolkit</span>
          <h2>What I build with.</h2>
          <p>
            Flutter-first, with native Android depth in Kotlin — plus the
            architecture and delivery skills to ship and maintain apps at scale.
          </p>
        </Reveal>

        {skillGroups.map((group) => (
          <Reveal className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="icon-grid">
              {group.items.map((item) => (
                <div className="icon-tile" key={item.label}>
                  <span
                    className="sq"
                    style={{
                      background: `linear-gradient(135deg,${item.from},${item.to})`,
                    }}
                  >
                    {item.sq}
                  </span>
                  <b>{item.label}</b>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
