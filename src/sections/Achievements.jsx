import { useState } from "react";
import "../styles/achievements.css";
import AchievementsModal from "../components/Achievements/AchievementsModal";

export default function Achievements() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      image: "/photos/NIT.jpeg",
      title: "Vencedor do 1º Hackathon da UniEvangélica",
      description: "Reconhecido por apresentar o projeto Meditrack na área da saúde.",
      fullDescription: "Reconhecido por apresentar o projeto Meditrack na área da saúde, destacando-se pela inovação, impacto social e aplicabilidade prática da solução desenvolvida durante o hackathon."
    },
    {
      image: "/photos/AgroStartup.jpeg",
      title: "2º Lugar no AgroStartup 2025",
      description: "Equipe AcomGest — reconhecida no Desafio AgroStartup 2025, alcançando o 2º lugar e recebendo a premiação de R$ 60 mil pelo desenvolvimento de uma solução inovadora para o agronegócio.",
      fullDescription: "Equipe AcomGest — reconhecida no Desafio AgroStartup 2025, alcançando o 2º lugar e recebendo a premiação de R$ 60 mil pelo desenvolvimento de uma solução inovadora para o agronegócio."
    },
    {
      image: "/photos/UFG.jpg",
      title: "2º Lugar no Hackathon da UFG",
      description: "Equipe AcomGest, reconhecida com o 2º lugar na Olimpíada de Empreendedorismo Universitário da UFG 2025, contemplada com prêmio de R$ 9 mil.",
      fullDescription: "Equipe AcomGest, reconhecida com o 2º lugar na Olimpíada de Empreendedorismo Universitário da UFG 2025, contemplada com prêmio de R$ 9 mil, destacando inovação e desempenho."
    }
  ];

  function handleOpenModal(achievement) {
    setSelectedAchievement(achievement);
    setIsOpen(true);
  }

  return (
    <section className="achievements" id="Conquistas">
      <h2>Conquistas & Prêmios</h2>
      <p className="achievements-subtitle">
        Aqui estão algumas das minhas conquistas e prêmios mais significativos.
      </p>

      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="achievement-card"
            onClick={() => handleOpenModal(ach)}
          >
            <img src={ach.image} alt={ach.title} />
            <div className="achievement-card-content">
              <h3>{ach.title}</h3>
              <p>{ach.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal chamado uma vez, fora dos cards */}
      <AchievementsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        achievement={selectedAchievement}
      />
    </section>
  );
}
