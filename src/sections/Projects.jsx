function Projects() {
  const projects = [
    {
      title: "Projet Kasa",
      description: "Application de location immobilière en React",
    },
    {
      title: "Mon Vieux Grimoire",
      description: "API Node.js pour gestion de livres",
    },
  ]

  return (
    <section className="projects">
      <h2>Mes projets</h2>

      <div className="projects__container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects