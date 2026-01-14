import { useState } from 'react';
import profile from '../assets/images/Perfil.jpg';
import '../styles/hero.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaDownload  } from 'react-icons/fa';
import About from './About';

export default function Hero() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [highlightContacts, setHighlightContacts] = useState(false);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';

  return (
    <>
      <section className="hero" id="hero">

        {/* Bloco visual: foto + redes */}
        <div className="hero-profile">
          <div className="hero-profile-image">
            <span className="hero-profile-halo" />
            <img
              src={profile}
              alt="Foto profissional de Thiago Gabriel"
            />
          </div>

          <div
            id="hero-contacts"
            className={`hero-social-links ${
              highlightContacts ? 'contact-highlight' : ''
            }`}
          >
  
          <div className="hero-profile-socials">
            <a href="https://www.linkedin.com/in/thiagogabriel10" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Thiagogmr1" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/thiagogabriel.7/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thiagogab.20@gmail.com&su=Contato%20pelo%20Portfólio"
              target="_blank"
              rel="noopener noreferrer"
              title="Enviar e-mail"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      
        {/* Conteúdo textual */}
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              {greeting}, eu sou o <br />
              Thiago Gabriel
            </h1>

            <p>Product Designer & Front-end Developer</p>
            <p>Founder: AcomGest e MediTrack</p>

            <div className="hero-buttons">
              <button
                className="button-primary"
                onClick={() => setIsSidebarOpen(true)}
              >
                Ler Sobre Mim
              </button>

               <a
                  href="/cv/Thiago_Gabriel_CV.pdf"
                    download
                    className="button-secondary button-download"
                >
                  <FaDownload className="btn-icon" />
                Baixar CV
              </a>
            </div>
          </div>
        </div>

      </section>

      <About
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setHighlightContacts={setHighlightContacts}
      />
    </>
  );
}
