import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Certifications from './pages/Certifications';
import Skills from './pages/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
      <div className="app-wrapper">

        <Navbar />
          <Home />
          <Skills />
          <Achievements />
          <Certifications />
          <Footer />

    </div>
  );
}

export default App;