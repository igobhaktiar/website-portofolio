import { useState } from 'react';
import StatusBar from './components/StatusBar.jsx';
import Hero from './components/Hero.jsx';
import TechBelt from './components/TechBelt.jsx';
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Showcase from './components/Showcase.jsx';

export default function App() {
  const [showcaseOpen, setShowcaseOpen] = useState(false);
  const openShowcase = () => setShowcaseOpen(true);
  const closeShowcase = () => setShowcaseOpen(false);

  return (
    <>
      <StatusBar onOpenShowcase={openShowcase} />
      <main>
        <Hero />
        <TechBelt />
        <Work onOpenShowcase={openShowcase} />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Showcase open={showcaseOpen} onClose={closeShowcase} />
    </>
  );
}
