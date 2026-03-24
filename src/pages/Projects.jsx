import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "../styles/projects.css";

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects">
                <div className="projects-container">
                    <h2 className="projects-title">Meus Projetos</h2>

                    <div className="projects-grid">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;