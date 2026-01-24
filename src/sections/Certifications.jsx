import { useState } from "react";
import "../styles/certifications.css";
import ModalCertificates from "../components/Certifications/ModalCertificates";

export default function Certifications() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [certificates, setCertificates] = useState([]);

  const certificatesData = {
    faculdade: [
      "/certificates/cert-1.png",
      "/certificates/cert-2.png",
      "/certificates/cert-3.png",
      "/certificates/cert-4.png",
      "/certificates/cert-5.png",
    ],
    startups: [
      "/certificates/startup5.png",
      "/certificates/startup1.png",
      "/certificates/startup2.png",
      "/certificates/startup3.png",
      "/certificates/startup4.png",
    ],
    outros: [
      "/certificates/outros1.png",
      "/certificates/outros2.png",
      "/certificates/outros3.png",
      "/certificates/outros4.png",
      "/certificates/outros5.png",
    ],
  };

  function openModal(list) {
    setCertificates(list);
    setCurrentIndex(0);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function next() {
    setCurrentIndex((prev) =>
      prev < certificates.length - 1 ? prev + 1 : prev
    );
  }

  function prev() {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }

  return (
    <>
      <section className="certifications" id="Certificações">
        <h2>Certificações</h2>

        <p className="certifications-description">
          Formação acadêmica e cursos complementares realizados ao longo da minha trajetória.
        </p>

        <div className="certifications-cards">
          {/* FACULDADE */}
          <div className="certification-card">
            <h3>Faculdade</h3>
            <div className="divider" />

            <ul>
              <li>Conclusão do Artigo Científico</li>
              <li>Congresso Internacional de Pesquisa, Ensino e Extensão (CIPEEX)</li>
              <li>Código Inteligente: A Lógica Criacional e a Inteligência por Trás dos Sistemas</li>
              <li>Workshop de Design Thinking</li>
              <li>Iniciação Científica</li>
            </ul>

            <button
              className="view-certificates"
              onClick={() => openModal(certificatesData.faculdade)}
            >
              Ver certificados
            </button>
          </div>

          {/* SEBRAE / STARTUPS */}
          <div className="certification-card">
            <h3>Startups</h3>
            <div className="divider" />

            <ul>
              <li>2º lugar no Agrostartup 2025</li>
              <li>Capacitação Empreendedora</li>
              <li>Conclusão da Capacitação Empreendedora</li>
              <li>Olimpíada de Empreendedorismo - UFG</li>
              <li>Vitória no 2º Hackathon</li>

            </ul>

            <button
              className="view-certificates"
              onClick={() => openModal(certificatesData.startups)}
            >
              Ver certificados
            </button>
          </div>

          {/* OUTROS CURSOS */}
          <div className="certification-card">
            <h3>Outros Cursos</h3>
            <div className="divider" />

            <ul>
              <li>Jornada Full Stack</li>
              <li>Maratona de Inovação - Anápolis</li>
              <li>VI Curso de Pesquisa e Inovação - Workshop</li>
              <li>Oficina - In_Book: Comunicação e Liderança</li>
              <li>Maratona Empreendedora </li>
            </ul>

            <button
              className="view-certificates"
              onClick={() => openModal(certificatesData.outros)}
            >
              Ver certificados
            </button>
          </div>
        </div>
      </section>

      {open && (
        <ModalCertificates
          certificates={certificates}
          currentIndex={currentIndex}
          onClose={closeModal}
          onNext={next}
          onPrev={prev}
        />
      )}
    </>
  );
}
