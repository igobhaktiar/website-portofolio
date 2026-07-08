import Reveal from './Reveal.jsx';
import Phone from './Phone.jsx';
import { screens } from './screens/index.js';
import { projects } from '../data/portfolio.js';

function ProjectCard({ project }) {
  const Screen = screens[project.screens[0]];

  return (
    <Reveal as="article" className="project-card">
      <div className="project-visual">
        <div className="device-panel sm">
          <Phone>{Screen ? <Screen /> : null}</Phone>
        </div>
      </div>
      <div className="project-body">
        <span className="p-index">{project.index}</span>
        <h3>{project.title}</h3>
        <div className="role">{project.role}</div>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="p-facts">
          {project.facts.map((f) => (
            <div className="m" key={f.label}>
              <b>{f.value}</b>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Work({ onOpenShowcase }) {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>Apps I've shipped end-to-end.</h2>
          <p>
            From architecture and state management to store release and post-launch
            maintenance — across Islamic apps, real estate, and agri-tech.
          </p>
          <button type="button" className="btn btn-ghost work-showcase-btn" onClick={onOpenShowcase}>
            View project showcase · Export PDF
          </button>
        </Reveal>

        <div className="projects">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
