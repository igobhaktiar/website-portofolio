import Reveal from './Reveal.jsx';
import { experience } from '../data/portfolio.js';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">The timeline</span>
          <h2>Career & education.</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((item) => (
            <Reveal className="tl-item" key={`${item.when}-${item.title}`}>
              <div className="when">{item.when}</div>
              <h3>{item.title}</h3>
              <div className="co">{item.company}</div>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
