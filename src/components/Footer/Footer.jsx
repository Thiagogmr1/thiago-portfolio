import '../Footer/Footer.css';
import logoReact from '../../assets/logoReact.svg';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name:  'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/thiagogabriel10', label:  'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/Thiagogmr1', label: 'GitHub' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/thiagogabriel.7/', label: 'Instagram' },
  ];

  const handleLinkClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Coluna 1: Logo e Descrição */}
        <div className="footer-column footer-about">
          <div className="footer-logo">
            <img src={logoReact} alt="Logo" className="footer-logo-img" />
            <h3>Thiago Gabriel</h3>
          </div>
          <p className="footer-description">
            Desenvolvedor Front-end e Product Designer, criando experiências digitais com atenção aos detalhes, usabilidade e inovação..
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-column footer-links">
          <h4>Seções existentes</h4>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a onClick={() => handleLinkClick(link.href)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div className="footer-column footer-contact">
          <h4>Contato</h4>
          <ul>
            <li>
              <FaEnvelope className="contact-icon" />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=thiagogab.20@gmail.com&su=Contato%20pelo%20Portfólio">thiagogab.20@gmail.com</a>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>Anápolis - GO, Brasil</span>
            </li>
            <li>
              <span className="contact-icon">💼</span>
              <span>Disponível para projetos</span>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Redes Sociais */}
        <div className="footer-column footer-social">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            {socialLinks. map((social, index) => (
              <a
                key={index}
                href={social. href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                {social. icon}
              </a>
            ))}
          </div>
          <p className="social-text">Vamos nos conectar!</p>
        </div>

      </div>

      {/* Linha divisória */}
      <div className="footer-divider"></div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} <span className="highlight">Thiago Gabriel</span>.  Todos os direitos reservados. 
        </p>
      </div>
    </footer>
  );
}