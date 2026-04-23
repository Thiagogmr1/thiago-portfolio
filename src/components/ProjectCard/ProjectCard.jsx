import { Icon } from "@iconify/react";

function ProjectCard({ project }) {
    const openDemo = () => {
        if (project.demo) {
            window.open(project.demo, "_blank");
        }
    };

    return (
        <div className="project-card" onClick={openDemo}>
            <div className="project-image-wrapper">
                <img
                    src={project.image || "https://via.placeholder.com/800x500"}
                    className="project-image"
                    alt={project.title}
                />

                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        GitHub
                    </a>
                )}

                {project.figma && (
                    <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="figma-btn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Figma
                    </a>
                )}
            </div>

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-techs">
                    {project.techs?.map((tech, index) => (
                        <span key={index} className="tech-badge">
                            <Icon
                                icon={tech.icon}
                                style={{ color: tech.color }}
                                className="tech-icon"
                            />
                            {tech.name}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;