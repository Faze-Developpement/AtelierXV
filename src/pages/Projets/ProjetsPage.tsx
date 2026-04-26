import { useState } from "react"
import { Link } from "react-router-dom"
import { PROJETS, CATEGORIES, type Categorie } from "../../data/projets"
import "./Projets.css"

export default function ProjetsPage() {
  const [filtre, setFiltre] = useState<Categorie | "Tous">("Tous")

  const projets = filtre === "Tous" ? PROJETS : PROJETS.filter(p => p.categorie === filtre)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Réalisations</p>
          <h1 className="section-title">Projets</h1>
        </div>
      </section>

      <section className="section projets-section">
        <div className="container">
          {/* Filtres */}
          <div className="projets-filtres">
            <button
              className={`filtre-btn${filtre === "Tous" ? " active" : ""}`}
              onClick={() => setFiltre("Tous")}
            >
              Tous
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filtre-btn${filtre === cat ? " active" : ""}`}
                onClick={() => setFiltre(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille */}
          <div className="projets-grid">
            {projets.map(p => (
              <Link key={p.slug} to={`/projets/${p.slug}`} className="projet-card">
                <div className="projet-card-img img-placeholder">
                  <span className="img-placeholder-label">Image d'illustration</span>
                </div>
                <div className="projet-card-info">
                  <span className="projet-card-cat">{p.categorie}</span>
                  <h2 className="projet-card-titre">{p.titre}</h2>
                  <p className="projet-card-desc">{p.description}</p>
                  <div className="projet-card-meta">
                    <span>{p.localisation}</span>
                    <span>{p.annee}</span>
                    <span>{p.surface}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
