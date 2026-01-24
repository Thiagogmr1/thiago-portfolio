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
    ],
    startups: [
      "/certificates/startup1.png",
      "/certificates/startup2.png",
      "/certificates/startup3.png",
    ],
    outros: [
      "/certificates/react1.png",
      "/certificates/frontend1.png",
      "/certificates/git1.png",
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
              <li>Iniciação Científica (CIPEEX)</li>
              <li>Engenharia de Software</li>
              <li>Arquitetura de Computadores</li>
              <li>Programação e Estruturas de Dados</li>
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
              <li>Empreendedorismo</li>
              <li>Gestão de Negócios</li>
              <li>Inovação e Startups</li>
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
              <li>Front-end (HTML, CSS, JavaScript)</li>
              <li>React</li>
              <li>Versionamento com Git</li>
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
