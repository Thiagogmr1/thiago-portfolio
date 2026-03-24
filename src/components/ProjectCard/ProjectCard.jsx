function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img
                src={project.image || "https://via.placeholder.com/800x500"}
                className="project-image"
                alt={project.title}
            />

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-techs">
                    {project.techs?.map((tech, index) => (
                        <span key={index} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    {project.demo && (
                        <a href={project.demo} className="btn-primary-custom">
                            Live
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} className="btn-outline-custom">
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;