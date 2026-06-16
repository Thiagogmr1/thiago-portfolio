import { useEffect } from 'react';

import '../styles/about.css';
import { FaTimes } from 'react-icons/fa';
import profile from '../assets/images/Perfil.jpg';


export default function About({ isSidebarOpen, setIsSidebarOpen, setHighlightContacts }) {

    useEffect(() => {
      if (isSidebarOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }

      // cleanup obrigatório
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isSidebarOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`about-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button
          className="sidebar-close-btn"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Fechar"
        >
          <FaTimes />
        </button>

        <div className="sidebar-content">
          <div className="sidebar-header">
            <div className="sidebar-profile-img">
              <img src={profile} alt="Thiago Gabriel" />
            </div>
            <h2>Thiago Gabriel</h2>
            <p className="sidebar-subtitle">
              Estudante de Engenharia de Software & Empreendedor
            </p>
          </div>

          {/* Conteúdo Principal */}
          <div className="sidebar-body">
            <section className="sidebar-section">
              <h3>Sobre Mim</h3>
              <p>
              Sou Thiago Gabriel, Desenvolvedor Front-end e Product Designer na FTT - Fábrica de Tecnologias Turing, fábrica-escola da UniEVANGÉLICA, 
              onde também curso Engenharia de Software. Minha stack principal inclui React, Next.js, TypeScript, Angular, Tailwind CSS, PostgreSQL e Git. 
              Tenho interesse em desenvolvimento de produtos digitais, experiência do usuário e construção de soluções tecnológicas com impacto real. 
              Sou comunicativo, colaborativo e atuo em equipes multidisciplinares, sempre buscando unir visão de produto, design e desenvolvimento. 
              Possuo inglês em nível intermediário.
.
              </p>
            </section>

            <section className="sidebar-section">
              <h3>Experiência</h3>
              <div className="experience-item">
                <h4>Founder & CEO</h4>
                <p className="company"> | MediTrack</p>
                <br />
                <p className="description">
                Atuo como Desenvolvedor na FTT - Fábrica de Tecnologias Turing, participando do desenvolvimento de softwares com metodologias ágeis, como 
                Scrum e Kanban, aplicando boas práticas de Engenharia de Software e trabalho colaborativo. Também sou fundador e CEO da MediTrack, uma healthtech 
                focada no acompanhamento medicamentoso e na promoção da adesão ao tratamento. A solução foi premiada em duas edições consecutivas do Hackathon da 
                UniEVANGÉLICA (2025 e 2026) e atualmente encontra-se em fase de validação de MVP, sendo utilizada em testes reais com médicos e pacientes. 
                No MediTrack, atuei tanto no desenvolvimento front-end quanto no backend com Python e FastAPI, desenvolvendo e integrando APIs REST em ambiente de 
                produção. Além disso, sou bolsista FUNADESP vinculado ao projeto e responsável pela visão estratégica e evolução do produto. Concluí ainda uma 
                Iniciação Científica com duração de um ano, resultando na publicação de um artigo científico e fortalecendo minha experiência em pesquisa aplicada 
                e desenvolvimento tecnológico.

                </p>
              </div>
            </section>

            <section className="sidebar-section">
              <h3>Habilidades</h3>
              <div className="skills-grid">
                <span className="skill-tag">Dev</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Scrum</span>
                <span className="skill-tag">Kanban</span>
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Git</span>
              </div>
            </section>

            <section className="sidebar-section">
              <h3>Formação</h3>
              <div className="education-item">
                <h4>Engenharia de Software</h4>
                <p className="institution">Instituição : Universidade Evangélica de Goiás - UniEVANGÉLICA</p>
                <p className="period">5º Período - Presente</p>
                <p className="year">Ano = 2024 - 2027</p>
              </div>
            </section>

            {/* <section className="sidebar-section">
              <h3>📫 Contato</h3>
              <div className="contact-links">
                <a href="mailto:seu-email@email.com" className="contact-link">
                  <FaEnvelope /> seu-email@email.com
                </a>
                <a
                  href="https://linkedin.com/in/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </section> */}
          </div>

          {/* Footer */}
          <div className="sidebar-footer">
            <a
              href="#contact"
              className="sidebar-cta-btn"
              onClick={(e) => {
                e.preventDefault();

                // 1. fecha sidebar
                setIsSidebarOpen(false);

                // 2. após a animação de fechamento
                setTimeout(() => {
                  setHighlightContacts(true);

                  // 3. desliga o efeito
                  setTimeout(() => {
                    setHighlightContacts(false);
                  }, 1600);
                }, 300);
              }}
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
