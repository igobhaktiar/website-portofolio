import { useEffect, useRef, useState } from 'react';
import Phone from './Phone.jsx';
import { screens } from './screens/index.js';
import { profile, projects, socials } from '../data/portfolio.js';
import './Showcase.css';

/**
 * Full-screen project-showcase overlay with a one-click "Export PDF" button.
 * Each `.pdf-page` is rasterized with html2canvas and placed on its own A4
 * page via jsPDF. Both libraries are imported lazily so they only load when
 * the user actually exports — keeping them out of the initial bundle.
 */
export default function Showcase({ open, onClose }) {
  const docRef = useRef(null);
  const [exporting, setExporting] = useState(false);

  // Lock background scroll + close on Escape while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape' && !exporting) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, exporting, onClose]);

  if (!open) return null;

  async function exportPdf() {
    if (exporting || !docRef.current) return;
    setExporting(true);
    try {
      const [{ jsPDF }, html2canvasMod] = await Promise.all([
        import('jspdf'),
        import('html2canvas'),
      ]);
      const html2canvas = html2canvasMod.default;

      // Make sure the web fonts are painted before we rasterize.
      if (document.fonts?.ready) await document.fonts.ready;

      const pages = docRef.current.querySelectorAll('.pdf-page');
      const pdf = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'landscape' });
      const pw = pdf.internal.pageSize.getWidth();
      const ph = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < pages.length; i++) {
        const canvas = await html2canvas(pages[i], {
          scale: 2,
          backgroundColor: '#FFFFFF',
          useCORS: true,
          logging: false,
        });
        const img = canvas.toDataURL('image/jpeg', 0.95);
        const ratio = Math.min(pw / canvas.width, ph / canvas.height);
        const w = canvas.width * ratio;
        const h = canvas.height * ratio;
        if (i > 0) pdf.addPage();
        pdf.addImage(img, 'JPEG', (pw - w) / 2, (ph - h) / 2, w, h);
      }

      pdf.save('Firgo_Bhaktiar_Hamsah-Project-Showcase.pdf');
    } catch (err) {
      console.error('PDF export failed:', err);
      alert('Sorry — the PDF export failed. Please try again.');
    } finally {
      setExporting(false);
    }
  }

  const totalPages = projects.length + 1;

  return (
    <div
      className="showcase-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Project showcase"
    >
      <div className="showcase-bar">
        <span className="title">Project Showcase</span>
        <span className="spacer" />
        <button
          type="button"
          className="btn btn-primary"
          onClick={exportPdf}
          disabled={exporting}
        >
          {exporting ? 'Generating…' : '⬇ Export PDF'}
        </button>
        <button
          type="button"
          className="showcase-close"
          onClick={onClose}
          aria-label="Close showcase"
        >
          ✕
        </button>
      </div>

      <div className="showcase-doc" ref={docRef}>
        {/* Cover page */}
        <section className="pdf-page pdf-cover">
          <span className="eyebrow">{profile.eyebrow}</span>
          <div className="name">{profile.name}</div>
          <div className="role">{profile.role} · Project Showcase</div>
          <p className="lede">{profile.lede}</p>
          <div className="cover-stats">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="cover-contact">
            <span>
              <b>Email</b> {profile.email}
            </span>
            {socials.map((s) => (
              <span key={s.label}>
                <b>{s.label}</b> {s.href.replace(/^https?:\/\//, '')}
              </span>
            ))}
          </div>
          <span className="page-num">01 / {String(totalPages).padStart(2, '0')}</span>
        </section>

        {/* One page per project */}
        {projects.map((project, i) => (
          <section className="pdf-page pdf-project" key={project.id}>
            <div className="pj-body">
              <span className="pj-index">{project.index}</span>
              <h3>{project.title}</h3>
              <div className="pj-role">{project.role}</div>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
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
            <div className={project.screens.length > 3 ? 'pj-gallery many' : 'pj-gallery'}>
              {project.screens.map((key) => {
                const Screen = screens[key];
                return (
                  <Phone key={key}>
                    {Screen ? <Screen /> : null}
                  </Phone>
                );
              })}
            </div>
            <span className="page-num">
              {String(i + 2).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </span>
          </section>
        ))}
      </div>
    </div>
  );
}
