import { Link } from "react-router-dom";
import Pelicula from "./Pelicula"
import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import {getMovieBySearch, getMovieByGenre, getMoviesPopular} from '../GetMovies'
import Spinner from "./Spinner";

// eslint-disable-next-line react/prop-types
const ContenedorPeliculas = ({search, category}) => {
  
  /*
    Para evitar que las películas se concatenen cada vez que se cambia de busqueda o categoria,
    se debe limpiar el estado de las películas. Para ello se puede mover los estados al estado padre
    y pasarlos como props al componente search para que se limpien cada vez que se cambie de busqueda
  */

  const [movies, setMovies] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [loading , setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  

  console.log('Mirar Acá', search, category)

  useEffect(()=>{
    const getMovies = async () => {
      setLoading(true)
      if(search === null && category !== null){
        const data = await getMovieByGenre(category, page)
        setMovies(prevMovies => prevMovies.concat(data.results))
        setHasMore(data.total_pages > data.page)
  
      }else if(category === null && search !== null){
        const data = await getMovieBySearch(search, page)
        setMovies(prevMovies => prevMovies.concat(data.results))
        setHasMore(data.total_pages > data.page)
        
      }else if(category === null && search === null){
        const data = await getMoviesPopular('/movie/popular', page)
        setMovies(prevMovies => prevMovies.concat(data.results))
        setHasMore(data.total_pages > data.page)
      }else{
        console.log('no entro en ninguno')
      }
      setLoading(false)
    }
    getMovies()
  },[search, page, category])

 
  return (
      <InfiniteScroll 
        dataLength={movies.length} 
        hasMore={hasMore} 
        next={()=> setPage(prevPage => prevPage + 1)}
        loader={<Spinner/>}
        > 
        <div className='contenedor-peliculas'>
            {movies.map((movie) => (
              <Link to={`/pelicula/${movie.id}`} key={movie.id} >
                <Pelicula movie={movie}/>
              </Link>
            ))}
        </div>
      </InfiniteScroll>
  )
}

export default ContenedorPeliculas