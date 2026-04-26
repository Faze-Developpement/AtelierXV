import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home/HomePage"
import ProjetsPage from "../pages/Projets/ProjetsPage"
import ProjetDetailPage from "../pages/Projets/ProjetDetailPage"
import AgencePage from "../pages/Agence/AgencePage"
import ContactPage from "../pages/Contact/ContactPage"
import NotFoundPage from "../pages/NotFound/NotFoundPage"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projets" element={<ProjetsPage />} />
      <Route path="/projets/:slug" element={<ProjetDetailPage />} />
      <Route path="/agence" element={<AgencePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
