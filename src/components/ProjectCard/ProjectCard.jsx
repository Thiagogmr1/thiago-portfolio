import { Icon } from "@iconify/react";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-image-wrapper">
                <img
                    src={project.image || "https://via.placeholder.com/800x500"}
                    className="project-image"
                    alt={project.title}
                />

                {project.github && (
                    <a href={project.github} className="github-btn">
                        GitHub
                    </a>
                )}
                {project.figma && (
                    <a href={project.figma} className="figma-btn">
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
                    {project.demo && (
                        <a href={project.demo} className="btn-primary-custom">
                            Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;