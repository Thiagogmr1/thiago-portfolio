import { useState, useEffect } from 'react';
import '../NavBar/NavBar.css';
import logoReact from '../../assets/logoReact.svg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
  const sections = ['hero', 'projects', 'skills', 'achievements', 'certifications'];
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

        const currentSection = sections.find(id => {
          const el = document.getElementById(id);
          if (!el) return false;

          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 150;
        });

        if (currentSection && currentSection !== activeLink) {
        setActiveLink(currentSection);
        }
      };

      handleScroll();

    window. addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeLink]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
    
    // Scroll suave para seção
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        <div className="navbar-logo">
          <img src={logoReact} alt="React Logo" className="logo-react" />
        </div>

        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li 
            className={activeLink === 'hero' ? 'active' : ''}
            onClick={() => handleLinkClick('hero')}
          >
            Home
          </li>
          <li 
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </li>
          <li 
            className={activeLink === 'skills' ? 'active' : ''}
            onClick={() => handleLinkClick('skills')}
          >
            Skills
          </li>
          <li 
            className={activeLink === 'achievements' ? 'active' : ''}
            onClick={() => handleLinkClick('achievements')}
          >
            Achievements
          </li>

          <li 
            className={activeLink === 'certifications' ? 'active' : ''}
            onClick={() => handleLinkClick('certifications')}
          >
            Certificates
          </li>
        </ul>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
