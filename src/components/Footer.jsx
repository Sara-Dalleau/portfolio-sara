import "./footer.scss";
import logo from "../assets/logo2.png";
import githubLogo from "../assets/logos/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* LOGO GAUCHE */}
        <a href="#hero" className="footer__logo">
          <img src={logo} alt="logo Sara" />
        </a>

        {/* CENTRE */}
        <p className="footer__copy">
          © 2026 Sara Dalleau
        </p>

        {/* DROITE */}
        <a
          href="https://github.com/Sara-Dalleau"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github"
        >
          <img src={githubLogo} alt="GitHub" />
        </a>

      </div>
    </footer>
  );
}

export default Footer;