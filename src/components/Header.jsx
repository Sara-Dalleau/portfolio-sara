import "./header.scss";
import logo from "../assets/logo2.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
      <div className="header__logo">
        <a href="#hero">
          <img src={logo} alt="logo Sara" />
        </a>
      </div>
    

    <nav className="header__nav">
      <a href="#about">À propos</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>
  );
}

export default Header;