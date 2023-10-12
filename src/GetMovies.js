const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "786ee52ce60c9ebb3805127db53d7f67"

export async function getMoviesByFetch(url){
  const response = await fetch(`${API_URL}${url}?api_key=${API_KEY}`)
  console.log("--------------------")
  console.log(`${API_URL}${url}&api_key=${API_KEY}`)
  const data = await response.json()
  
  return data.results
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

export async function getMovieBySearch(query){
  const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
  const data = await response.json()
  return data.results
}

export async function getMovieByGenre(genre){
  const response = await fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`)
  const data = await response.json()
  return data.results
}