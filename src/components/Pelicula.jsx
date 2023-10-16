import PropTypes from 'prop-types'
import imagen from '../assets/noimagen.png'

const IMG_URL = "https://image.tmdb.org/t/p/w500/"

const Pelicula = ({movie}) => {
  Pelicula.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

  const poster = movie.poster_path === null ? imagen : `${IMG_URL}${movie.poster_path}`

  return (
    <div className='contenedor-pelicula'>
      <img className='pelicula-imagen' src={poster} alt={movie.title} />
      <div>
        <h3 className='pelicula-titulo'>{movie.title}</h3>
      </div>
    </div>
  )
}
export default Pelicula