import Navbar from './components/NavBar/NavBar';
import Hero from './pages/Hero';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Skills from './pages/Skills';
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