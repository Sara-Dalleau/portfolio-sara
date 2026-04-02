import Header from "./components/Header";

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Parcours from './sections/Parcours'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="parcours">
        <Parcours />
      </section>

      <section id="contact">
        <Contact />
      </section>
      </main>
    </>
  )
}

export default App