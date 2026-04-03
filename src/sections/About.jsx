import aboutImg from "../assets/about-img.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">

        {/* TEXTE */}
        <div className="about__text">
          <h2>À propos de moi</h2>

          <p>
            Développeuse web, basée en France. Je me spécialise en front-end avec React tout en développant mes compétences en back-end avec Node.js.
          </p>

          <p>
            J’accorde une attention particulière à l’expérience utilisateur, à la qualité du code et à la structuration des projets.
          </p>

          <p>
            À travers des projets concrets, j’ai appris à concevoir des interfaces modernes, gérer des données dynamiques et construire des applications complètes.
          </p>

          <p>
            Je recherche aujourd’hui une opportunité pour continuer à progresser et contribuer à des projets réels au sein d’une équipe.
          </p>
        </div>

        <div className="about__image">
          <img src={aboutImg} alt="illustration développement web" />
        </div>
      </div>
    </section>
  );
}

export default About;