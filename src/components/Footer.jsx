import "./footer.scss";
import logo from "../assets/logo2.png";
import githubLogo from "../assets/logos/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* LOGO */}
        <a href="#hero" className="footer__logo">
          <img src={logo} alt="Logo Sara Dalleau" />
        </a>

        {/* COPYRIGHT */}
        <p className="footer__copy">
          © {new Date().getFullYear()} Sara Dalleau
        </p>

        {/* GITHUB */}
        <a
          href="https://github.com/Sara-Dalleau"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__github"
          aria-label="Voir le profil GitHub de Sara Dalleau"
        >
          <img src={githubLogo} alt="" />
        </a>

      </div>
    </footer>
  );
}

export default Footer;