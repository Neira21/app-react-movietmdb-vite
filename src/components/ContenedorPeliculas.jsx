import { Link } from "react-router-dom";
import Pelicula from "./Pelicula"
import PropTypes from 'prop-types'

const ContenedorPeliculas = ({movies}) => {
  ContenedorPeliculas.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };
  
  return (
    <div className='contenedor-peliculas'>
        {movies.map((movie) => (
          <Link to={`/pelicula/${movie.id}`} key={movie.id}  >
            <Pelicula movie={movie} />
          </Link>
        ))}
    </div>
  )
}

export default ContenedorPeliculas