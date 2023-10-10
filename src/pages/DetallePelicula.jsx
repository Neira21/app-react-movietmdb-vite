import { Link } from "react-router-dom"
const DetallePelicula = () => {
  return (
    <div>
      <div className='title'>
          <h1>Películas TMBD 👽👽👽</h1>
          <div>
            <Link to={'/'} > Inicio</Link>
            <Link to={'/contenedorpelicula'} >Contenedor Pelicula</Link>
          </div>
        </div>
     <h1>DetallePelicula</h1>
    </div>
  )
}

export default DetallePelicula