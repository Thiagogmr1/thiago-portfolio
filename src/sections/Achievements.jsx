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

      fullDescription: `O Meditrack nasceu de uma experiência intensa de inovação na UniEVANGÉLICA e ganhou força ao vencer o
      Hackathon acadêmico da instituição. Essa conquista levou o projeto a avançar para o ambiente de pesquisa e inovação, 
      sendo contemplado com uma Bolsa de Iniciação Tecnológica. Atualmente, a iniciativa segue em desenvolvimento contínuo 
      com o apoio da UniEVANGÉLICA e do UniCIETEC.
      Construído de forma colaborativa por uma equipe multidisciplinar das áreas de Engenharia de Software, Direito e Medicina, 
      o Meditrack busca unir viabilidade técnica e impacto social, colocando a tecnologia a serviço de soluções mais humanas e 
      efetivas na área da saúde.`
    },

    {
      image: "/photos/AgroStartup.jpeg",
      title: "2º Lugar no AgroStartup 2025",
      description: `Equipe AcomGest — reconhecida no Desafio AgroStartup 2025, alcançando o 2º lugar e recebendo a premiação 
      de R$ 60 mil pelo desenvolvimento de uma solução inovadora para o agronegócio.`,

      fullDescription: `A equipe AcomGest conquistou o 2º lugar no edital promovido pelo SENAR Goiás, sendo contemplada com 
      uma premiação de R$ 60 mil destinada ao desenvolvimento do projeto. O reconhecimento foi resultado do desempenho da equipe 
      na criação de uma solução baseada em inteligência artificial aplicada à pecuária, com foco na inovação e na eficiência do 
      agronegócio. A conquista ocorreu após a participação em uma trilha de capacitação com duração aproximada de nove meses, 
      que envolveu 144 equipes de diferentes cidades do estado de Goiás. Durante todo o processo, a equipe contou com o apoio 
      institucional da UniEVANGÉLICA e do UniCIETEC.`
    },
    
    {
      image: "/photos/UFG.jpg",
      title: "2º Lugar no Hackathon da UFG",
      description: "Equipe AcomGest, reconhecida com o 2º lugar na Olimpíada de Empreendedorismo Universitário da UFG 2025, contemplada com prêmio de R$ 9 mil.",
      
      fullDescription: `A equipe AcomGest foi contemplada com a premiação de R$ 9 mil ao conquistar o 2º lugar na Olimpíada de Empreendedorismo Universitário da 
      UFG 2025, em reconhecimento ao desempenho e à inovação da solução desenvolvida para o agronegócio. O projeto é baseado no uso de inteligência artificial e 
      visão computacional aplicadas à pecuária, com foco na modernização e eficiência do setor.
      A conquista foi resultado da participação da equipe em uma trilha de capacitação composta por reuniões online, encontros orientativos e workshops estratégicos, 
      além da adoção de estratégias voltadas à elaboração de documentações técnicas e à construção de pitches competitivos. A equipe contou com o apoio institucional 
      da UniEVANGÉLICA e do UniCIETEC ao longo do processo.`
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
        Aqui estão algumas das minhas conquistas e prêmios mais significativos. Clique nos cards para saber mais detalhes.
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
