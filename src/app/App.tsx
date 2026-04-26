import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../router/router"

const routerBasename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "")

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <AppRouter />
    </BrowserRouter>
  )
}
