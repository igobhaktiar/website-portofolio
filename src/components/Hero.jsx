import Phone from './Phone.jsx';
import QuranScreen from './screens/QuranScreen.jsx';
import { profile } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{profile.eyebrow}</span>
          <h1>
            I build mobile apps that{' '}
            <span className="accent">scale cleanly on every screen.</span>
          </h1>
          <p className="lede">{profile.lede}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#work">
              View my work
            </a>
            <a
              className="btn btn-ghost"
              href={profile.resume}
              target="_blank"
              rel="noopener"
            >
              Download résumé
            </a>
          </div>
          <div className="hero-stats">
            {profile.stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-device">
          <Phone>
            <QuranScreen
              name="Al-Fatihah"
              meta="THE OPENING · 7 AYAH · MAKKIYYAH"
              ayahs={[
                {
                  ar: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                  n: '١',
                  tr: 'In the name of Allah, the Most Gracious, the Most Merciful.',
                },
                {
                  ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
                  n: '٢',
                  tr: 'All praise is due to Allah, Lord of all the worlds.',
                },
              ]}
              playerLabel="01:12"
            />
          </Phone>
        </div>
      </div>
    </section>
  );
}
