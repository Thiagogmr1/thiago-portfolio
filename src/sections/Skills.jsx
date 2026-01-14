import '../styles/skills.css';

export default function Skills() {
  const skillsData = {
    frontend: ['JavaScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma'],
    concepts: ['Responsive Design', 'Web Performance', 'Scrum', 'UI/UX', 'Agile']
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        
        {/* Header com Texto */}
        <div className="skills-intro">
          <h2>Skills & Technologies</h2>
          <p className="skills-description">
            I build modern web applications focused on clean code, great UX, and performance.
          </p>
        </div>

        {/* Grid de Skills */}
        <div className="skills-content">
          
          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="skill-tags">
              {skillsData.frontend.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Tools</h3>
            <div className="skill-tags">
              {skillsData.tools.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Concepts</h3>
            <div className="skill-tags">
              {skillsData.concepts.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

        </div>

        {/* Texto Adicional (Opcional) */}
        <div className="skills-footer">
          {/* <p>
            Currently expanding my knowledge in advanced React patterns, 
            TypeScript best practices, and modern build tools.
          </p> */}
        </div>

      </div>
    </section>
  );
}