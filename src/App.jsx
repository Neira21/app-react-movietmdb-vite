import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import ContenedorPelicula from "./pages/ContenedorPelicula"
import DetallePelicula from "./pages/DetallePelicula"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contenedorpelicula"  element={<ContenedorPelicula />} />
        <Route path="/pelicula/:id" element={<DetallePelicula />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
