import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Skills from './pages/Skills';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    
      <div className="app-wrapper">

        <Navbar />
          <Home />
          <Projects />
          <Skills />
          <Achievements />
          <Certifications />
          <Footer />
          
    </div>
  );
}

export default App;