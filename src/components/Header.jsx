import "./header.scss";

function Header() {
  return (
    <header className="header">
  <div className="header__container">
    <div className="header__logo">Sara Dalleau</div>

    <nav className="header__nav">
      <a href="#hero">Accueil</a>
      <a href="#about">À propos</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>
  );
}

export default Header;