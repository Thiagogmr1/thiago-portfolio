import { useState } from 'react';
import '../styles/certifications.css';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certifications" id="certifications">
      <h2>Certificações</h2>
      <p className='certifications-description'>
        Certificações obtidas ao longo da minha trajetória educacional e profissional. Clique para visualizar cada certificado.
      </p>

      <ul className="certifications-list">
        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-1.jpg')}>
            Iniciação Científica - CIPEEX
          </button>
          <span>2025</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

        <li>
          <button onClick={() => setSelectedCert('/certificates/cert-2.png')}>
            Nome da Certificação
          </button>
          <span>Ano</span>
        </li>

      </ul>

      {selectedCert && (
        <div className="modal" onClick={() => setSelectedCert(null)}>
          <div className="modal-content">
            <img src={selectedCert} alt="Certificado" />
          </div>
        </div>
      )}
    </section>
  );
}
