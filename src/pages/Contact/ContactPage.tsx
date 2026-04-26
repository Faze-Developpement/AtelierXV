import { useState } from "react"
import "./Contact.css"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Nous contacter</p>
          <h1 className="section-title">Contact</h1>
          <p className="section-lead">
            Pour nous soumettre un projet ou simplement prendre contact avec l'agence.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Form */}
            <div className="contact-form-col">
              {sent ? (
                <div className="contact-success">
                  <span className="contact-success-mark">—</span>
                  <h2 className="contact-success-title">Message reçu</h2>
                  <p className="contact-success-text">Merci de votre message. Nous vous répondrons dans les meilleurs délais.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="prenom">Prénom</label>
                      <input id="prenom" name="prenom" type="text" placeholder="Jean" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="nom">Nom</label>
                      <input id="nom" name="nom" type="text" placeholder="Dupont" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="jean.dupont@email.fr" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={6} placeholder="Décrivez votre projet ou votre demande…" required />
                  </div>
                  <button type="submit" className="btn btn-dark contact-submit">
                    Envoyer
                  </button>
                </form>
              )}
            </div>

            {/* Aside */}
            <aside className="contact-aside">
              <div className="contact-coords">
                <span className="accent-line" />
                <p className="eyebrow" style={{ marginBottom: "20px" }}>Atelier XV Architectes</p>
                <address className="contact-address">
                  30, chemin de la planquette<br />
                  76130 Mont-Saint-Aignan
                </address>
                <a href="tel:+33232824343" className="contact-link">02.32.82.43.43</a>
                <a href="mailto:agence@atelier-xv.fr" className="contact-link">agence@atelier-xv.fr</a>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  )
}
