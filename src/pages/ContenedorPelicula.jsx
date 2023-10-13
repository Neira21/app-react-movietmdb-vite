/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom"
import ContenedorPeliculas from "../components/ContenedorPeliculas"
import { useEffect } from "react"
import {getMovieBySearch, getMovieByGenre, getMoviesPopular} from '../GetMovies'
import { useState } from "react"
import BuscardorPelicula from "../components/BuscardorPelicula"

const ContenedorPelicula = () => {
  const [movies, setMovies] = useState([])
  const { search } = useParams()
  const { generoname } = useParams()
  const [loading , setLoading] = useState(true)
  
  const [page, setPage] = useState(1)

  const changePage = () => {
    setPage(prevPage => prevPage + 1)
  }
  
  const getMovies = async () => {
    console.log(search,'|||', generoname)
    if(search === undefined && generoname !== undefined){
      console.log("entro aca 1")
      setLoading(true)
      const data = await getMovieByGenre(generoname, page)
      setMovies(prevMovies => prevMovies.concat(data))
      setLoading(false)
    }else if(generoname === undefined && search !== undefined){
      console.log("entro aca 2")
      setLoading(true)
      const data = await getMovieBySearch(search, page)
      setMovies(prevMovies => prevMovies.concat(data))
      setLoading(false)
    }else if(generoname === undefined && search === undefined){
      console.log("entro aca 3")
      setLoading(true)
      const data = await getMoviesPopular('/movie/popular', page)
      console.log(data)
      setMovies(prevMovies => prevMovies.concat(data))
      setLoading(false)
    }
  }

  useEffect(()=>{
    getMovies()
  },[search, page])
  
  return (
    <>
      <div className='title'>
          <h1>Películas TMBD 👽👽👽</h1>
          <div>
            <Link to={'/'} >Inicio</Link>
          </div>
      </div>
      <BuscardorPelicula />
      <ContenedorPeliculas movies={movies} changePage={changePage} loading={loading} />
      
   </>
  )
}

export default ContenedorPelicula