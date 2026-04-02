import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import jsLogo from "../assets/logos/js.svg";
import reactLogo from "../assets/logos/react.svg";
import sassLogo from "../assets/logos/sass.svg";

import nodeLogo from "../assets/logos/nodejs.svg";
import expressLogo from "../assets/logos/express.svg";
import mongoLogo from "../assets/logos/mongodb.svg";

import gitLogo from "../assets/logos/git.svg";
import githubLogo from "../assets/logos/github.svg";
import vscodeLogo from "../assets/logos/vscode.png";
import vercelLogo from "../assets/logos/vercel.svg";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Compétences</h2>

      <div className="skills__container">

        {/*  FRONT + BACK */}
        <div className="skills__row">

          {/* FRONT */}
          <div className="skills__block">
            <h3>Front-end</h3>

            <div className="skills__list">
              <div className="skill-card">
                <img src={htmlLogo} alt="HTML" />
                <span>HTML</span>
              </div>

              <div className="skill-card">
                <img src={cssLogo} alt="CSS" />
                <span>CSS</span>
              </div>

              <div className="skill-card">
                <img src={jsLogo} alt="JavaScript" />
                <span>JavaScript</span>
              </div>

              <div className="skill-card">
                <img src={sassLogo} alt="Sass" />
                <span>Sass</span>
              </div>

              <div className="skill-card">
                <img src={reactLogo} alt="React" />
                <span>React</span>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="skills__block">
            <h3>Back-end</h3>

            <div className="skills__list">
              <div className="skill-card">
                <img src={nodeLogo} alt="Node.js" />
                <span>Node.js</span>
              </div>

              <div className="skill-card">
                <img src={expressLogo} alt="Express" />
                <span>Express</span>
              </div>

              <div className="skill-card">
                <img src={mongoLogo} alt="MongoDB" />
                <span>MongoDB</span>
              </div>
            </div>
          </div>

        </div>

        {/* OUTILS*/}
        <div className="skills__block">
          <h3>Outils</h3>

          <div className="skills__list">
            <div className="skill-card">
              <img src={gitLogo} alt="Git" />
              <span>Git</span>
            </div>

            <div className="skill-card">
              <img src={githubLogo} alt="GitHub" />
              <span>GitHub</span>
            </div>

            <div className="skill-card">
              <img src={vscodeLogo} alt="VS Code" />
              <span>VS Code</span>
            </div>

            <div className="skill-card">
              <img src={vercelLogo} alt="Vercel" />
              <span>Vercel</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;