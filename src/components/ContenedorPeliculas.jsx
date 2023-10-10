import Pelicula from "./Pelicula"

const ContenedorPeliculas = ({movies}) => {
  console.log(movies)
  return (
    <div className='contenedor-peliculas'>
        {movies.map((movie) => (
          <Pelicula movie={movie} key={movie.id} />
        ))}
    </div>
  )
}

export default ContenedorPeliculas