import reactLogo from "../assets/logos/react.svg"
import nodeLogo from "../assets/logos/nodejs.svg"
import expressLogo from "../assets/logos/express.svg"
import mongoLogo from "../assets/logos/mongodb.svg"
import viteLogo from "../assets/logos/vite.svg"
import githubLogo from "../assets/logos/github.svg"

import kasaImg from "../assets/kasa.png"
import grimoireImg from "../assets/grimoire.png"

function Projects() {
  const projects = [
    {
      title: "Mon Vieux Grimoire",
      date: "03-2026",
      image: grimoireImg,
      type: "Back-End",
      context:
        "API sécurisée permettant aux utilisateurs de gérer une bibliothèque de livres avec authentification et notation.",
      github: "https://github.com/Sara-Dalleau/backend.git",

      objectives:
        "Mettre en place une API REST sécurisée permettant la gestion de livres avec authentification utilisateur et gestion des images.",

      skills:
        "Création d’API avec Node.js et Express, gestion de MongoDB, authentification JWT, structuration backend.",

      results:
        "API fonctionnelle avec CRUD complet, système de notation et sécurisation des routes.",

      improvements:
        "Ajouter pagination, optimisation des performances et tests automatisés.",

      stack: [
        { name: "Node.js", logo: nodeLogo, url: "https://nodejs.org" },
        { name: "Express", logo: expressLogo, url: "https://expressjs.com" },
        { name: "MongoDB", logo: mongoLogo, url: "https://www.mongodb.com" },
      ],
    },

    {
      title: "Kasa",
      date: "03-2026",
      image: kasaImg,
      type: "Front-End",
      context:
        "Application web de location immobilière avec affichage dynamique et routing.",
      github: "https://github.com/Sara-Dalleau/kasa.git",

      objectives:
        "Développer une application web avec React incluant navigation dynamique et affichage des logements.",

      skills:
        "Utilisation de React, React Router, gestion du state, composants réutilisables et structuration SPA.",

      results:
        "Application fonctionnelle avec navigation fluide et gestion des erreurs (404, id invalide).",

      improvements:
        "Ajouter un backend pour rendre les données dynamiques et améliorer les performances.",

      stack: [
        { name: "React", logo: reactLogo, url: "https://react.dev" },
        { name: "Vite", logo: viteLogo, url: "https://vitejs.dev" },
      ],
    },
  ]

  return (
    <section className="projects" id="projects">
      <h2>Projets</h2>

      <div className="projects__container">
        {projects.map((project, index) => (
          <div key={index} className="project">

            {/* CARD */}
            <div className="project-card">
              <img
                src={project.image}
                alt={`Projet ${project.title} - ${project.type} développé avec ${project.stack.map(tech => tech.name).join(", ")}`}
              />

              <div className="card-content">
                <p className="project-date">{project.date}</p>
                <h2>{project.title}</h2>
                <p className="project-context">{project.context}</p>
              </div>
            </div>

            {/* TAGS + DETAILS */}
            <div className="project-body">

              {/* TAGS */}
              <div className="project-tags">

                <div className="tags-left">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag tag--github"
                  >
                    <img src={githubLogo} alt="GitHub" />
                    GitHub
                  </a>

                  <span className="tag tag--type">
                    {project.type}
                  </span>

                  <span className="tag tag--api">API</span>
                </div>

                {/* LOGOS */}
                <div className="tags-right">
                  {project.stack.map((tech, i) => (
                    <a
                      key={i}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-logo"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className={tech.name.toLowerCase().replace(".", "")}
                      />
                    </a>
                  ))}
                </div>

              </div>

              {/* DETAILS */}
              <div className="project-details">

                <div className="detail">
                  <h4>Objectifs:</h4>
                  <p>{project.objectives}</p>
                </div>

                <div className="detail">
                  <h4>Compétences:</h4>
                  <p>{project.skills}</p>
                </div>

                <div className="detail">
                  <h4>Résultats:</h4>
                  <p>{project.results}</p>
                </div>

                <div className="detail">
                  <h4>Améliorations:</h4>
                  <p>{project.improvements}</p>
                </div>

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects