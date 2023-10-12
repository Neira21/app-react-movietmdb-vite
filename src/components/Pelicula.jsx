import PropTypes from 'prop-types'

const IMG_URL = "https://image.tmdb.org/t/p/w500/"

const Pelicula = ({movie}) => {
  Pelicula.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };
  return (
    <div className='contenedor-pelicula' key={movie.id}>
      <img className='pelicula-imagen' src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
      <div>
        <h3 className='pelicula-titulo'>{movie.title}</h3>
      </div>
    </div>
  )
}
export default Pelicula