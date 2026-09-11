import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import Contact from './sections/Contact';
import DownloadCV from './sections/DownloadCV';
import Footer from './sections/Footer';
import CVPage from './pages/CVPage';
import { useHashRoute } from './hooks/useHashRoute';

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const hash = useHashRoute();

  if (hash === 'cv') {
    return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <CVPage />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <>
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Languages />
          <Contact />
          <DownloadCV />
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
