import Navbar from './components/NavBar/NavBar';
import Hero from './sections/Hero';
import Achievements from './sections/Achievements';
import Certifications from './sections/Certifications';
import Skills from './sections/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
      <div className="app-wrapper">

        <Navbar />
          <Hero />
          <Skills />
          <Achievements />
          <Certifications />
          <Footer />

    </div>
  );
}

export default App;