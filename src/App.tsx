import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Languages from './sections/Languages';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CVPage from './pages/CVPage';
import { useHashRoute } from './hooks/useHashRoute';

function App() {
  const hash = useHashRoute();

  if (hash === 'cv') {
    return <CVPage />;
  }

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
