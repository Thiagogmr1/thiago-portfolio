import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../styles/projects.css";

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2 className="projects-title">Meus Projetos</h2>

                <p className="projects-subtitle">
                    Alguns projetos que desenvolvi e colaborei. Clique para ver mais..
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;