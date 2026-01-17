import { useState, useEffect } from 'react';
import '../NavBar/NavBar.css';
import logoReact from '../../assets/logoReact.svg';

const sections = ['hero', 'projects', 'skills', 'achievements', 'certifications'];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const currentSection = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;

        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      window.scrollTo(0, scrollY);
    };
  }, [mobileMenuOpen]);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Se o menu mobile estiver aberto, aplica delay
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);

      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveLink(id);
      }, 350);
    } else {
      // Desktop (ou mobile sem menu aberto): navegação imediata
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        <div className="navbar-logo">
          <img src={logoReact} alt="React Logo" className="logo-react" />
        </div>

        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          {sections.map(section => (
            <li
              key={section}
              className={activeLink === section ? 'active' : ''}
            >
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(section);
                }}
              >

                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}

              </a>
            </li>
          ))}
        </ul>

        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  );
}
