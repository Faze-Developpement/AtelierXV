import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/logo.jpg"
import "./Header.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={close} aria-label="Atelier XV Architectes — Accueil">
          <img src={logo} alt="Atelier XV" className="brand-logo" />
          <div className="brand-text">
            <span className="brand-name">Atelier XV</span>
            <span className="brand-sub">Architectes</span>
          </div>
        </Link>

        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          type="button"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav${menuOpen ? " nav-open" : ""}`} aria-label="Navigation principale">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>
            Accueil
          </NavLink>
          <NavLink to="/projets" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>
            Projets
          </NavLink>
          <NavLink to="/agence" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={close}>
            L'Agence
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link nav-link-cta${isActive ? " active" : ""}`} onClick={close}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
