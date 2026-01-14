import '../styles/achievements.css';

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <h2>Conquistas & Prêmios</h2>
      <p className="achievements-subtitle">Aqui estão algumas das minhas conquistas e prêmios mais significativos.
        
      </p>

      <div className="achievements-grid">

        {/* Card 1 */}

        <div className="achievement-card">
          <img src="/photos/NIT.jpeg" alt="1º Hackathon" />
          <div className="achievement-card-content">
            <h3>Vencedor do 1º Hackathon da UniEvangélica</h3>
            <p>Reconhecido por apresentar o projeto Meditrack na área da saúde.</p>
          </div>
        </div>

        {/* Card 2 */}

        <div className="achievement-card">
          <img src="/photos/AgroStartup.jpeg" alt="AgroStartup" />
          <div className="achievement-card-content">
            <h3>2º Lugar no AgroStartup 2025</h3>
            <p>Equipe AcomGest — reconhecida no Desafio AgroStartup 2025, alcançando o 2º lugar e recebendo 
              a premiação de R$ 60 mil pelo desenvolvimento de uma solução inovadora para o agronegócio.</p>
          </div>
        </div>

        {/* Card 3 */}

        <div className="achievement-card">
          <img src="/photos/UFG.jpg" alt="Hackathon da UFG" />
          <div className="achievement-card-content">
            <h3>2º Lugar no Hackathon da UFG</h3>
            <p>Equipe AcomGest, reconhecida com o 2º lugar na Olimpíada de Empreendedorismo Universitário 
              da UFG 2025, contemplada com prêmio de R$ 9 mil.</p>
          </div>
        </div>
      </div>
    </section>
  );
}