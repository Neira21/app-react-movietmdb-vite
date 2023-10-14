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
            <img width={400} height={500} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
          <div className='caracteristicas-detalle'>
            <table className='tabla-datos'>
              <thead>
                <tr>
                  <td><p>Estado de la Película/Serie: </p> </td>
                  <td>{movie.status}</td>
                </tr>
                <tr>
                  <td><p>Fecha de estreno: </p></td>
                  <td>{movie.release_date}</td>
                </tr>
                <tr>
                  <td><p>Popularidad:</p> </td>
                  <td>{movie.popularity}</td>
                </tr>
                <tr>
                  <td><p>Voto Promedio </p></td>
                  <td>{movie.vote_average}</td>
                </tr>
                <tr>
                  <td><p>Total de votaciones </p> </td>
                  <td>{movie.vote_count}</td>
                </tr>
              </thead>
               
    
              
                
              
              
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