import { useParams, Link } from "react-router-dom"
import { PROJETS } from "../../data/projets"
import "./ProjetDetail.css"

export default function ProjetDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const projet = PROJETS.find(p => p.slug === slug)

  if (!projet) {
    return (
      <div className="container" style={{ padding: "96px 0" }}>
        <p>Projet introuvable.</p>
        <Link to="/projets" className="btn btn-outline" style={{ marginTop: "24px" }}>Retour aux projets</Link>
      </div>
    )
  }

  const autres = PROJETS.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* ---- Header ---- */}
      <section className="detail-header">
        <div className="container">
          <Link to="/projets" className="detail-back">← Projets</Link>
          <p className="eyebrow">{projet.categorie}</p>
          <h1 className="section-title">{projet.titre}</h1>
          <div className="detail-meta-row">
            <span>{projet.localisation}</span>
            <span>{projet.annee}</span>
            <span>{projet.surface}</span>
            <span>{projet.maitreOuvrage}</span>
          </div>
        </div>
      </section>

      {/* ---- Image principale ---- */}
      <div className="detail-img-hero img-placeholder">
        <span className="img-placeholder-label">Image d'illustration</span>
      </div>

      {/* ---- Description ---- */}
      <section className="section detail-content">
        <div className="container">
          <div className="detail-content-grid">
            <div className="detail-text">
              <span className="accent-line" />
              <p className="detail-description">{projet.descriptionLongue}</p>
            </div>
            <div className="detail-fichetechnique card">
              <h3 className="detail-fiche-title">Fiche technique</h3>
              <dl className="detail-dl">
                <div><dt>Catégorie</dt><dd>{projet.categorie}</dd></div>
                <div><dt>Localisation</dt><dd>{projet.localisation}</dd></div>
                <div><dt>Année</dt><dd>{projet.annee}</dd></div>
                <div><dt>Surface</dt><dd>{projet.surface}</dd></div>
                <div><dt>Maître d'ouvrage</dt><dd>{projet.maitreOuvrage}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Images secondaires ---- */}
      <section className="detail-imgs-grid">
        <div className="img-placeholder detail-img-sec">
          <span className="img-placeholder-label">Image d'illustration</span>
        </div>
        <div className="img-placeholder detail-img-sec">
          <span className="img-placeholder-label">Image d'illustration</span>
        </div>
      </section>

      {/* ---- Autres projets ---- */}
      {autres.length > 0 && (
        <section className="section detail-autres">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow">Voir aussi</p>
              <h2 className="section-title">Autres projets</h2>
            </div>
            <div className="detail-autres-grid">
              {autres.map(p => (
                <Link key={p.slug} to={`/projets/${p.slug}`} className="projet-card">
                  <div className="projet-card-img img-placeholder">
                    <span className="img-placeholder-label">Image d'illustration</span>
                  </div>
                  <div className="projet-card-info">
                    <span className="projet-card-cat">{p.categorie}</span>
                    <h3 className="projet-card-titre">{p.titre}</h3>
                    <div className="projet-card-meta">
                      <span>{p.localisation}</span>
                      <span>{p.annee}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
