import { useState } from "react";
import "./header.scss";
import logo from "../assets/logo2.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">

        {/* LOGO */}
        <div className="header__logo">
          <a href="#hero">
            <img src={logo} alt="Logo Sara Dalleau" />
          </a>
        </div>

        {/* BURGER */}
        <button
          className="burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* NAVIGATION */}
        <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>À propos</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projets</a>
          <a href="#parcours" onClick={() => setMenuOpen(false)}>Parcours</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;