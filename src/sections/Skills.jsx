import { Icon } from '@iconify/react';
import '../styles/skills.css';

export default function Skills() {
  const skillsData = {
    frontend: [
      { name: 'React', icon: 'logos:react', color: '#61DAFB' },
      { name: 'JavaScript', icon: 'logos:javascript', color: '#F7DF1E' },
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', color: '#E34F26' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', color: '#1572B6' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', color: '#06B6D4' }
    ],
    tools: [
      { name: 'Git', icon: 'logos:git-icon', color: '#F05032' },
      { name: 'GitHub', icon: 'mdi:github', color: '#ffffff' },
      { name: 'VS Code', icon: 'vscode-icons:file-type-vscode', color: '#007ACC' },
      { name: 'Figma', icon: 'logos:figma', color: '#F24E1E' },
      { name: 'IA', icon: 'healthicons:artificial-intelligence-outline', color: '#5f5aed' }
    ],
    Practices: [
      { name: 'Responsive Design', icon: 'material-symbols:devices', color: '#00D9FF' },
      { name: 'Web Performance', icon: 'carbon:dashboard-reference', color: '#FFD700' },
      { name: 'Scrum', icon: 'mdi:format-list-checks', color: '#00C853' },
      { name: 'UI/UX', icon: 'mdi:palette-outline', color: '#c92e62' },
      { name: 'Agile', icon: 'mdi:speedometer', color: '#0096FF' }
    ]
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
                <span key={idx} className="skill-tag" style={{ '--skill-color': skill.color }}>
                  <Icon icon={skill.icon} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Tools</h3>
            <div className="skill-tags">
              {skillsData.tools.map((skill, idx) => (
                <span key={idx} className="skill-tag" style={{ '--skill-color': skill.color }}>
                  <Icon icon={skill.icon} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="skill-group">
            <h3>Practices</h3>
            <div className="skill-tags">
              {skillsData.Practices.map((skill, idx) => (
                <span key={idx} className="skill-tag" style={{ '--skill-color': skill.color }}>
                  <Icon icon={skill.icon} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </span>
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