/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom"
import { getTvById } from "../GetMovies"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const DetallePelicula = () => {

  const { id } = useParams()
  const [tv, setTv] = useState([])

  const getMovie = async () => {
    const data = await getTvById(id)
    console.log(data)
    setTv(data)
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div>
      <div className='title'>
        <h1>Serie de Televisión TMBD 👽👽👽</h1>
          <div>
            <Link to={'/'} > Inicio</Link>
            <Link to={'/contenedorpelicula'} >Contenedor Pelicula</Link>
          </div>
        </div>
     <div className='contenedor-pelicula-detalle'>
        <div className='titulo-detalle'>
          <h2>{tv.title}</h2>
        </div>
        <div className='datos-detalle'>
          <div className='imagen-detalle'>
            <img width={400} height={500} src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={tv.title} />
          </div>
          <div className='caracteristicas-detalle'>
            <table className='tabla-datos'>
              <thead>
                <tr>
                  <td><p>Estado de la Película/Serie: </p> </td>
                  <td>{tv.status}</td>
                </tr>
                <tr>
                  <td><p>Fecha de estreno: </p></td>
                  <td>{tv.first_air_date}</td>
                </tr>
                <tr>
                  <td><p>Popularidad:</p> </td>
                  <td>{tv.popularity}</td>
                </tr>
                <tr>
                  <td><p>Número de episodios</p></td>
                  <td>{tv.number_of_episodes}</td>
                </tr>
                <tr>
                  <td><p>Número de temporadas</p></td>
                  <td>{tv.number_of_seasons}</td>
                </tr>
                <tr>
                  <td><p>HomePage </p> </td>
                  <td><a href={tv.homepage}>Mirala acá</a></td>
                </tr>
              </thead>
              
            </table>
          </div>
        </div>

        <div className='descripcion-detalle'>
          <p>{tv.overview}</p>
        </div>

        <div className='generos-detalle'>
          <div>
            <h3>Generos:</h3>
          </div>
            <div className='contenedor-categoria'>
              {tv.genres && tv.genres.map((genero) => {
                return <div className='categoria-card' key={genero.id}>
                   <h3 className="categoria-titulo">{genero.name}</h3>
                  </div>
              })}
            </div>
        </div>
        <div>
          <div>
            Series similares
          </div>
          <div>
            Lista de series similares  
          </div>
        </div>
     </div>
    </div>
  )
}

export default DetallePelicula