import { Link } from "react-router-dom";
import Pelicula from "./Pelicula"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const ContenedorPeliculas = ({movies, changePage}) => {

  ContenedorPeliculas.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    changePage: PropTypes.func.isRequired,
  };
  
  return (
    <InfiniteScroll 
      dataLength={movies.length} 
      hasMore={true} 
      next={()=> changePage() }
      loader={<p>Cargando</p>}
      > 
      <div className='contenedor-peliculas'>
          {movies.map((movie) => (
            <Link to={`/pelicula/${movie.id}`} key={movie.id}  >
              <Pelicula movie={movie} />
            </Link>
          ))}
      </div>
    </InfiniteScroll>
  )
}

export default ContenedorPeliculas