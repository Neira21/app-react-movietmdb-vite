import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import ContenedorPelicula from "./pages/ContenedorPelicula"
import DetallePelicula from "./pages/DetallePelicula"
import DetalleTv from "./pages/DetalleTv"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contenedorpelicula/:search"  element={<ContenedorPelicula />} />
        <Route path="/genero/:generoname"  element={<ContenedorPelicula />} />
        <Route path="/pelicula/:id" element={<DetallePelicula />} />
        <Route path="/tv/:id" element={<DetalleTv />} />
      </Routes>
      
      
    </BrowserRouter>
  )
}
export default App
