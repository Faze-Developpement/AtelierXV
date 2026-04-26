import { Link } from "react-router-dom"
import { PROJETS } from "../../data/projets"
import "./Home.css"

const EXPERTISES = [
  "Logement collectif",
  "Logement groupé",
  "Logement individuel",
  "ERP",
  "Interventions sur l'existant",
  "Commerces & bureaux",
  "Aménagement",
]

const FEATURED = PROJETS.slice(0, 3)

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-inner">
            <div className="home-hero-text">
              <p className="eyebrow">Cabinet d'architecture · Normandie</p>
              <h1 className="home-hero-title">
                Concevoir<br />
                <em>l'espace juste</em>
              </h1>
              <p className="home-hero-lead">
                Atelier XV Architectes accompagne maîtres d'ouvrage publics et privés dans leurs projets de construction, réhabilitation et aménagement en Normandie.
              </p>
              <div className="home-hero-ctas">
                <Link to="/projets" className="btn btn-dark">Voir nos projets</Link>
                <Link to="/agence" className="btn btn-outline">L'Agence</Link>
              </div>
            </div>
            <div className="home-hero-visual">
              <div className="home-hero-img img-placeholder" style={{ height: "480px" }}>
                <span className="img-placeholder-label">Image d'illustration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Expertises ---- */}
      <section className="home-expertises">
        <div className="container">
          <div className="home-expertises-inner">
            <span className="home-exp-label eyebrow">Domaines d'expertise</span>
            <ul className="home-exp-list">
              {EXPERTISES.map(e => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Projets featured ---- */}
      <section className="section home-projets">
        <div className="container">
          <div className="section-header home-projets-header">
            <div>
              <p className="eyebrow">Réalisations</p>
              <h2 className="section-title">Projets récents</h2>
            </div>
            <Link to="/projets" className="btn btn-outline-stone">Tous les projets</Link>
          </div>
          <div className="home-projets-grid">
            {FEATURED.map((p, i) => (
              <Link key={p.slug} to={`/projets/${p.slug}`} className={`home-projet-card${i === 0 ? " home-projet-card--large" : ""}`}>
                <div className="home-projet-img img-placeholder" style={{ height: i === 0 ? "400px" : "280px" }}>
                  <span className="img-placeholder-label">Image d'illustration</span>
                </div>
                <div className="home-projet-info">
                  <span className="home-projet-cat">{p.categorie}</span>
                  <h3 className="home-projet-titre">{p.titre}</h3>
                  <span className="home-projet-meta">{p.localisation} · {p.annee}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Agence teaser ---- */}
      <section className="home-agence">
        <div className="container">
          <div className="home-agence-inner">
            <div className="home-agence-text">
              <span className="accent-line" />
              <p className="eyebrow">L'Agence</p>
              <h2 className="section-title">Une architecture<br />ancrée dans son territoire</h2>
              <p className="section-lead">
                Fondé à Mont-Saint-Aignan, l'Atelier XV intervient sur l'ensemble du territoire normand. Notre approche privilégie le dialogue avec le site, l'usage et la durabilité des matériaux.
              </p>
              <Link to="/agence" className="btn btn-outline" style={{ marginTop: "32px" }}>Découvrir l'agence</Link>
            </div>
            <div className="home-agence-img img-placeholder" style={{ height: "440px" }}>
              <span className="img-placeholder-label">Image d'illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Contact CTA ---- */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta-inner">
            <h2 className="home-cta-title">Un projet à nous soumettre ?</h2>
            <p className="home-cta-sub">Mont-Saint-Aignan · 02.32.82.43.43 · agence@atelier-xv.fr</p>
            <Link to="/contact" className="btn btn-light">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
