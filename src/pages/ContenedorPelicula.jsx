import { Link } from "react-router-dom"
import ContenedorPeliculas from "../components/ContenedorPeliculas"

import { useLocation } from "react-router-dom"
import BuscardorPelicula from "../components/BuscardorPelicula"


const ContenedorPelicula = () => {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get('search');

  console.log('search', search)

  //obtener el parametro de la url de category

  const category = params.get('category')

  console.log('category', category)
  
  
 
  
  return (
    <>
      <div className='title'>
          <h1>Películas TMBD 👽👽👽</h1>
          <div>
            <Link to={'/'} >Inicio</Link>
          </div>
      </div>
      <BuscardorPelicula />
      <ContenedorPeliculas search={search} key={search} category={category} />
      
   </>
  )
}

export default ContenedorPelicula