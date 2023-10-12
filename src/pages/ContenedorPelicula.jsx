/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom"
import ContenedorPeliculas from "../components/ContenedorPeliculas"
import { useEffect } from "react"
import {getMovieBySearch, getMovieByGenre} from '../GetMovies'
import { useState } from "react"
import BuscardorPelicula from "../components/BuscardorPelicula"
import Spinner from "../components/Spinner"

const ContenedorPelicula = () => {
  const [movies, setMovies] = useState([])
  const { search, generoname } = useParams()
  const [loading , setLoading] = useState(true)
  
  const getMovies = async () => {
    if(search === undefined){
      setLoading(true)
      const data = await getMovieByGenre(generoname)
      setMovies(data)
      setLoading(false)
    }else if(generoname === undefined){
      setLoading(true)
      const data = await getMovieBySearch(search)
      setMovies(data)
      setLoading(false)
    }
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
      {loading ? <Spinner />
      :<ContenedorPeliculas movies={movies}/> }
      
   </>
  )
}

export default ContenedorPelicula