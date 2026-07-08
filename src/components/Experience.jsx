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
            <Reveal className="exp-item" key={`${item.when}-${item.title}`}>
              <div className="exp-when">{item.when}</div>
              <div className="exp-content">
                <h3>{item.title}</h3>
                <div className="exp-co">{item.company}</div>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
