function Parcours() {
  return (
    <section id="parcours" className="parcours">
      <h2>Mon parcours</h2>

      <p className="parcours-intro">
      Après une expérience en restauration puis en ressources humaines, j’ai choisi de me réorienter vers le développement web suite à une immersion à l’école 42, qui a confirmé mon intérêt pour ce domaine.
      </p>

      <div className="parcours__timeline">

        <div className="parcours-card">
          <span className="date">2019 — 2024</span>
          <h3>Directeur adjoint</h3>
          <span className="company">Restauration rapide</span>
          <p>Gestion d’équipe, organisation des services et pilotage opérationnel.</p>
        </div>

        <div className="parcours-card">
          <span className="date">2024 — 2025</span>
          <h3>Chargé de compte client</h3>
          <span className="company">StaffMatch - Ressources humaines</span>
          <p>Suivi client, gestion administrative et coordination interne.</p>
        </div>

        <div className="parcours-card">
          <span className="date">2025</span>
          <h3>Stage Discovery + Piscine 42</h3>
          <span className="company">École 42</span>
          <p>Découverte du C, du shell et des bases du développement web.</p>
        </div>

        <div className="parcours-card">
          <span className="date">2025 — 2026</span>
          <h3>Développeur Web</h3>
          <span className="company">OpenClassrooms</span>
          <p>Réalisation de projets front-end et back-end dans le cadre de ma reconversion.</p>
        </div>

      </div>
    </section>
  );
}

export default Parcours;