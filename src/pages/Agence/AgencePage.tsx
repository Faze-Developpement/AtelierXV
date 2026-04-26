import { Link } from "react-router-dom"
import "./Agence.css"

const VALEURS = [
  { num: "I", titre: "Écoute", texte: "Chaque projet commence par une attention portée au programme, au site, aux usages. L'architecture naît du dialogue." },
  { num: "II", titre: "Contextualité", texte: "Nos projets s'inscrivent dans leur territoire — paysage, tissu urbain, matériaux locaux — sans renoncer à la contemporanéité." },
  { num: "III", titre: "Durabilité", texte: "Nous privilégions les matériaux biosourcés, les structures pérennes et les dispositifs bioclimatiques passifs." },
  { num: "IV", titre: "Rigueur", texte: "De l'esquisse au chantier, la maîtrise technique garantit la fidélité du projet construit au projet pensé." },
]

const PRESTATIONS = [
  "Esquisse & Avant-Projet Sommaire",
  "Avant-Projet Définitif & PC",
  "Dossier de Consultation des Entreprises",
  "Direction de l'Exécution des Travaux",
  "Ordonnancement, Pilotage, Coordination",
  "Réception des Ouvrages",
]

export default function AgencePage() {
  return (
    <>
      {/* ---- Header ---- */}
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Qui sommes-nous</p>
          <h1 className="section-title">L'Agence</h1>
          <p className="section-lead">
            Atelier XV Architectes est un cabinet d'architecture normand, fondé à Mont-Saint-Aignan, spécialisé dans le logement, les équipements publics et la réhabilitation.
          </p>
        </div>
      </section>

      {/* ---- Portrait ---- */}
      <section className="section agence-portrait">
        <div className="container">
          <div className="agence-portrait-grid">
            <div className="agence-portrait-img img-placeholder" style={{ height: "500px" }}>
              <span className="img-placeholder-label">Image d'illustration</span>
            </div>
            <div className="agence-portrait-text">
              <span className="accent-line" />
              <p className="eyebrow">L'atelier</p>
              <h2 className="section-title">Architecture<br /><em>de proximité</em></h2>
              <p className="agence-body">
                L'Atelier XV intervient sur l'ensemble du territoire normand pour des maîtres d'ouvrage publics et privés. Notre périmètre d'activité couvre le logement — collectif, groupé, individuel —, les établissements recevant du public, les interventions sur le bâti existant, les commerces et bureaux, et les missions d'aménagement intérieur.
              </p>
              <p className="agence-body">
                La proximité géographique n'est pas anecdotique : elle nous permet d'être présents sur les chantiers, de connaître les entreprises locales et d'intégrer les spécificités climatiques et constructives de la Normandie dans chaque projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Valeurs ---- */}
      <section className="section agence-valeurs">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Notre approche</p>
            <h2 className="section-title">Ce qui guide notre travail</h2>
          </div>
          <div className="agence-valeurs-grid">
            {VALEURS.map(v => (
              <div key={v.num} className="agence-valeur">
                <span className="agence-valeur-num">{v.num}</span>
                <h3 className="agence-valeur-titre">{v.titre}</h3>
                <p className="agence-valeur-texte">{v.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Prestations ---- */}
      <section className="section agence-prestations">
        <div className="container">
          <div className="agence-prest-grid">
            <div>
              <span className="accent-line" />
              <p className="eyebrow">Missions</p>
              <h2 className="section-title">Nos prestations</h2>
              <p className="agence-body" style={{ marginTop: "16px" }}>
                Nous intervenons sur l'ensemble des phases d'une opération architecturale, de la programmation à la réception des ouvrages.
              </p>
            </div>
            <ul className="agence-prest-list">
              {PRESTATIONS.map((p, i) => (
                <li key={p}>
                  <span className="agence-prest-num">0{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- Coordonnées ---- */}
      <section className="section-sm agence-coords">
        <div className="container">
          <div className="agence-coords-inner card">
            <div className="agence-coords-info">
              <p className="eyebrow" style={{ marginBottom: "20px" }}>Nous trouver</p>
              <address className="agence-address">
                <strong>Atelier XV Architectes</strong>
                30, chemin de la planquette<br />
                76130 Mont-Saint-Aignan
              </address>
              <div className="agence-contacts">
                <a href="tel:+33232824343">02.32.82.43.43</a>
                <a href="mailto:agence@atelier-xv.fr">agence@atelier-xv.fr</a>
              </div>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: "24px" }}>
                Nous écrire
              </Link>
            </div>
            <div className="agence-map img-placeholder">
              <span className="img-placeholder-label">Carte — Image d'illustration</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
