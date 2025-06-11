import { useState } from "react"
import { projects } from "../../data/projects";
import './ProjectsSection.css'

export const ProjectsSection = () => {
    const [filter, setFilter] = useState("Todos");

    const categorias = ["Todos", "Full Stack", "Frontend", "Backend"];

    const projectsFilter = filter === "Todos" ? projects : projects.filter(p => p.category === filter);

    return (
        <section className='featured-projects' id="mis-proyectos">
            <div className="project-container" >

                <header className="category-projects">
                    <h3>PROYECTOS</h3>
                    <h2>Mis proyectos destacados</h2>
                    <div className="filters">
                        {categorias.map((cat) => (
                            <button key={cat} onClick={() => setFilter(cat)} className={cat === filter ? 'selected' : ''}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </header>
                <div className="projectList">
                    {projectsFilter.map((project) => (
                        <div className="project">
                            <div className="info">
                                <header className="category-project">
                                    <h3>{project.category.toUpperCase()}</h3>
                                </header>
                                <div className="text">
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                    <p>{project.phrase}</p>
                                </div>
                                <div className="ancors">
                                    <a href="#">Visitar</a>
                                    <a href="#">Frontend</a>
                                    <a href="#">Backend</a>
                                    <a href="#">Video</a>
                                </div>
                            </div>
                            <div className="cover">
                                <img src={project.image} alt="constancIA" className="img-project" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
