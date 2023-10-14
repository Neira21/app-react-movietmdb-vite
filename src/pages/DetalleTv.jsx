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
     <h1>DetallePelicula</h1>
      <h2>{tv.name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} alt={tv.name} />
      <p>{tv.overview}</p>
    </div>
  )
}

export default DetallePelicula