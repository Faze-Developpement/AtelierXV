import { Link } from "react-router-dom"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">Atelier XV</span>
          <span className="footer-sub">Architectes</span>
          <p className="footer-address">
            30, chemin de la planquette<br />
            76130 Mont-Saint-Aignan
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navigation secondaire">
          <Link to="/">Accueil</Link>
          <Link to="/projets">Projets</Link>
          <Link to="/agence">L'Agence</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer-contact">
          <a href="tel:+33232824343">02.32.82.43.43</a>
          <a href="mailto:agence@atelier-xv.fr">agence@atelier-xv.fr</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© {new Date().getFullYear()} Atelier XV Architectes</span>
          <span>Mont-Saint-Aignan, Normandie</span>
        </div>
      </div>
    </footer>
  )
}
