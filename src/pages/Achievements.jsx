import { useState } from "react";
import "../styles/achievements.css";
import AchievementsModal from "../components/Achievements/AchievementsModal";

export default function Achievements() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      image: "/photos/NIT.jpeg",
      title: "Vencedor do 2º Hackathon da UniEvangélica",
      description: "Reconhecido por apresentar o projeto Meditrack na área da saúde.",

      fullDescription: `O Meditrack nasceu de uma experiência intensa de inovação na UniEVANGÉLICA e ganhou destaque ao vencer 
      o Hackathon acadêmico da instituição. A conquista permitiu a continuidade do projeto no ambiente de pesquisa e inovação, 
      sendo contemplado com uma Bolsa de Iniciação Tecnológica, com apoio da UniEVANGÉLICA e do UniCIETEC. Desenvolvido de forma 
      colaborativa por uma equipe multidisciplinar das áreas de Engenharia de Software, Direito e Medicina, o Meditrack une 
      viabilidade técnica e impacto social na criação de soluções tecnológicas voltadas à área da saúde.`
    },

    {
      image: "/photos/AgroStartup.jpeg",
      title: "2º Lugar no AgroStartup 2025",
      description: `Equipe AcomGest - reconhecida no Desafio AgroStartup 2025, alcançando o 2º lugar e recebendo a premiação 
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
      
      fullDescription: `A equipe AcomGest conquistou o 2º lugar na Olimpíada de Empreendedorismo Universitário da UFG 2025, sendo 
      contemplada com uma premiação de R$ 9 mil. O reconhecimento foi resultado do desenvolvimento de uma solução baseada em 
      inteligência artificial aplicada à pecuária, com foco na inovação e na eficiência do agronegócio. A conquista ocorreu após 
      a participação em uma trilha de capacitação com reuniões online, workshops e mentorias estratégicas, contando com o apoio 
      institucional da UniEVANGÉLICA e do UniCIETEC.`
    },

    {
      image: "/photos/img.png",
      title: "Vencedor do 3º Hackathon da UniEvangélica",
      description: "Plataforma de saúde digital que auxilia pacientes e profissionais no acompanhamento medicamentoso, promovendo maior adesão ao tratamento.",

      fullDescription: `Após se destacar no Hackathon da UniEVANGÉLICA, o Meditrack voltou a ser reconhecido em uma nova edição
      do evento, conquistando o 3º lugar entre os projetos participantes. A premiação reforçou o potencial da solução e contribuiu 
      para a continuidade de seu desenvolvimento, incluindo uma bolsa de apoio à inovação e recursos para a evolução do MVP. 
      Desenvolvido de forma colaborativa por uma equipe multidisciplinar das áreas de Engenharia de Software, Direito e Medicina, 
      o Meditrack segue unindo tecnologia e impacto social para promover maior adesão ao tratamento medicamentoso e ampliar o acesso 
      ao acompanhamento em saúde.
`
    }
  ];

  function handleOpenModal(achievement) {
    setSelectedAchievement(achievement);
    setIsOpen(true);
  }

  return (
    <section className="achievements" id="conquistas">
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
