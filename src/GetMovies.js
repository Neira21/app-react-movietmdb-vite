const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "786ee52ce60c9ebb3805127db53d7f67"

export async function getMoviesOrTvByFetch(url){
  const response = await fetch(`${API_URL}${url}?api_key=${API_KEY}`)
  const data = await response.json()
  return data.results
}

export async function getMoviesPopular(url, page){
  const response = await fetch(`${API_URL}${url}?api_key=${API_KEY}&page=${page}`)
  const data = await response.json()
  return data
}


export async function getCategories(url){
  const response = await fetch(`${API_URL}${url}?api_key=${API_KEY}`)
  const data = await response.json()
  return data.genres
}

export async function getMovieById(id){
  const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
  const data = await response.json()
  return data
}

export async function getTvById(id){
  const response = await fetch(`${API_URL}/tv/${id}?api_key=${API_KEY}`)
  const data = await response.json()
  return data
}

export async function getMovieBySearch(query, page){
  const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
  const data = await response.json()
  return data
}

export async function getMovieByGenre(genre, page){
  //Obtener id de genero
  const response = await getCategories('/genre/movie/list')
  
  const genreId = response.find(g => g.name === genre).id
  
  //Obtener peliculas por id de genero
  const response2 = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`)
  const data2 = await response2.json()

  return data2
}