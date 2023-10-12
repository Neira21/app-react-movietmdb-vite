/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom"
import { getMovieById } from "../GetMovies"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const DetallePelicula = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState([])

  const getMovie = async () => {
    const data = await getMovieById(id)
    if(data.success !== false){
      console.log(' data existe entonces es una pelicula', data)
      setMovie(data)
    }
  }

  useEffect(() => {
    getMovie()
  }, [])
  

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
     <div className='contenedor-pelicula-detalle'>
        <div className='titulo-detalle'>
          <h2>{movie.title}</h2>
        </div>
        <div className='datos-detalle'>
          <div className='imagen-detalle'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className='caracteristicas-detalle'>
            <table>
              <thead>
                <tr>
                  <td>Estado de la película</td>
                  <td>Fecha de estreno</td>
                  <td>Popularidad</td>
                  <td>Voto Promedio</td>
                  <td>Total de votaciones</td>
                </tr>
                
              </thead>
              <tbody>
                <tr>
                  <td>{movie.status}</td>
                  <td>{movie.release_date}</td>
                  <td>{movie.popularity}</td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.vote_count}</td>
                </tr>
              </tbody>
              
            </table>
          </div>
        </div>

        <div className='descripcion-detalle'>
          <p>{movie.overview}</p>
        </div>

        <div className='generos-detalle'>
          <div>
            <h3>Generos</h3>
          </div>
          
            <div className='contenedor-categoria'>
              {movie.genres && movie.genres.map((genero) => {
                return <div className='categoria-card' key={genero.id}>
                   <h3>{genero.name}</h3>
                  </div>
              })}
            </div>
          

        </div>

        <div>
          <div>
            Peliculas similares
          </div>
          <div>
            Lista de películas generales  
          </div>
        </div>

     </div>
      
      
      
     
    </div>
  )
}

export default DetallePelicula