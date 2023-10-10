import { Link } from "react-router-dom"
import ContenedorPeliculas from "../components/ContenedorPeliculas"
import { useEffect } from "react"
import {getMoviesByFetch} from '../GetMovies'
import { useState } from "react"

const ContenedorPelicula = () => {
  const [movies, setMovies] = useState([])
  const getMovies = async () => {
    const data = await getMoviesByFetch('/discover/movie')
    setMovies(data)
  }

  useEffect(()=>{
    getMovies()
  },[])
  
  return (
    <>
      <div className='title'>
          <h1>Películas TMBD 👽👽👽</h1>
          <div>
            <Link to={'/'} >Inicio</Link>
            <Link to={'/pelicula/:id'} > Detalle de Pelicula</Link>
          </div>
        </div>
      <ContenedorPeliculas movies={movies}/>
   </>
  )
}

export default ContenedorPelicula