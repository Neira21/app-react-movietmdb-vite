/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom"
import ContenedorPeliculas from "../components/ContenedorPeliculas"
import { useEffect } from "react"
import {getMovieBySearch, getMovieByGenre, getMoviesPopular} from '../GetMovies'
import { useState } from "react"
import BuscardorPelicula from "../components/BuscardorPelicula"


const ContenedorPelicula = () => {
  const [movies, setMovies] = useState([])
  const { search, generoname } = useParams()

  const [loading , setLoading] = useState(true)

  const [page, setPage] = useState(1)

  const changePage = async () => {
    setPage(prevPage => prevPage + 1)
  }
  
  const getMovies = async () => {
    
    setLoading(true)
    if(search === undefined && generoname !== undefined){
      const data = await getMovieByGenre(generoname, page)
      setMovies(prevMovies => prevMovies.concat(data))

    }else if(generoname === undefined && search !== undefined){
      const data = await getMovieBySearch(search, page)
      setMovies(prevMovies => prevMovies.concat(data))
      
    }else if(generoname === undefined && search === undefined){
      const data = await getMoviesPopular('/movie/popular', page)
      setMovies(prevMovies => prevMovies.concat(data))
    }
    setLoading(false)
  }

  useEffect(()=>{
    getMovies()
  },[search])
  
  return (
    <>
      <div className='title'>
          <h1>Películas TMBD 👽👽👽</h1>
          <div>
            <Link to={'/'} >Inicio</Link>
          </div>
      </div>
      <BuscardorPelicula />
      <ContenedorPeliculas key={search} movies={movies} changePage={changePage} loading={loading} />
      
   </>
  )
}

export default ContenedorPelicula