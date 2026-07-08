import StatusBar from './components/StatusBar.jsx';
import Hero from './components/Hero.jsx';
import TechBelt from './components/TechBelt.jsx';
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <StatusBar />
      <main>
        <Hero />
        <TechBelt />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
