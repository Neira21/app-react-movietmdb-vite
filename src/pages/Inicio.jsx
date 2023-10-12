import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {getMoviesByFetch} from '../GetMovies'
import { BiCameraMovie } from 'react-icons/bi'
import BuscardorPelicula from '../components/BuscardorPelicula'
import Spinner from '../components/Spinner'

const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "786ee52ce60c9ebb3805127db53d7f67"
const IMG_URL = "https://image.tmdb.org/t/p/w500/"

const Inicio = () => {
  
  //const [search, setSearch] = useState('')
  const [movieTrending, setMovieTrending] = useState([])
  const [tvTrending, setTvTrending] = useState([])
  const [movieCategory, setMovieCategory] = useState([])

  

  const getTrendingMovies = async () => {
    const data = await getMoviesByFetch('/trending/movie/day')
    setMovieTrending(data)
  }

  const getTrendingTv = async () => {
    const response = await fetch(`${API_URL}/trending/tv/day?api_key=${API_KEY}&language=es-ES&page=1`)
    const data = await response.json()
    setTvTrending(data.results)
  }

  const getMovieCategory = async () => {
    const response = await fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES&page=1`)
    const data = await response.json()
    setMovieCategory(data.genres)
  }

  // const getTvCategory = async () => {
  //   const response = await fetch(`${API_URL}/genre/tv/list?api_key=${API_KEY}&language=es-ES&page=1`)
  //   const data = await response.json()
  // }
  
  useEffect(()=>{
    getTrendingMovies()
    getTrendingTv()
    getMovieCategory()
  },[])

  return (
    <>
      <div className='app'>
        <div className='title'>
          <h1>Películas TMBD  <BiCameraMovie/> <BiCameraMovie/> <BiCameraMovie/></h1>
          <div>
            <Link to={'/contenedorpelicula'} >Contenedor Pelicula</Link>
          </div>
        </div>
        
        <Spinner size={100} />

        <BuscardorPelicula />
        
        <div className='titulo'>
            Películas en tendencia
        </div>
        <div className='contenedor-tendencia'>
          {movieTrending.map((movie) => (
            <Link to={`/pelicula/${movie.id}`} key={movie.id}  >
              <div className='contenedor-tendencia-tarjeta' key={movie.id}>
                  <img className='imagen-tendencia' src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
                  <h3 className='titulo-tendencia'>
                    {movie.title}
                  </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className='titulo'>
            Series de Televisión en tendencia
        </div>
        <div className='contenedor-tendencia'>
          {tvTrending.map((tv) => (
            <Link to={`/tv/${tv.id}`} key={tv.id}  >
              <div className='contenedor-tendencia-tarjeta' key={tv.id}>
                <img className='imagen-tendencia' src={`${IMG_URL}${tv.poster_path}`} alt={tv.title} />
                <h3 className='titulo-tendencia'>
                  {tv.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className='subtitulo'>
            Películas Categorías
        </div>

        <div className='contenedor-categoria'>
          {movieCategory.map((category) => (
            <Link key={category.id} to={`/genero/${category.name}`}>
              <div className='categoria-card' key={category.id}>
                <h3 className='categoria-titulo'>{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Inicio