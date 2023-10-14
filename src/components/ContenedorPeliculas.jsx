import { Link } from "react-router-dom";
import Pelicula from "./Pelicula"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const ContenedorPeliculas = ({movies, changePage}) => {

  ContenedorPeliculas.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    changePage: PropTypes.func.isRequired,
  };
  
  return (
    <div className='infinite-scroll-container'>
    
      <InfiniteScroll 
        dataLength={movies.length} 
        hasMore={true} 
        next={()=> changePage() }
        loader={<p>Cargando</p>}
        className='infinite-scroll-container'
        > 
        <div className='contenedor-peliculas'>
            {movies.map((movie) => (
              <Link to={`/pelicula/${movie.id}`} key={movie.id} >
                <Pelicula movie={movie}/>
              </Link>
            ))}
        </div>
      </InfiniteScroll>
      </div>
  )
}

export default ContenedorPeliculas