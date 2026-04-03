import bgImage from "../assets/hero1.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero__content">
        <h1>
          Hello ! <br />
          Moi c'est <span className="accent">Sara </span>
        </h1>

        <h2>Développeuse web junior</h2>

        <p>
        Je conçois des interfaces modernes et fonctionnelles, pensées pour l’utilisateur
        </p>

        <div className="hero__buttons">
          <a href="#projects">Voir mes projets</a>
          <a href="#contact" className="secondary">Me contacter</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;