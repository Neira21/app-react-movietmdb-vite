const API_URL = "https://api.themoviedb.org/3"
const API_KEY = "786ee52ce60c9ebb3805127db53d7f67"

export async function getMoviesByFetch(url){
  const response = await fetch(`${API_URL}${url}?api_key=${API_KEY}`)
  console.log("--------------------")
  console.log(`${API_URL}${url}&api_key=${API_KEY}`)
  const data = await response.json()
  
  return data.results
}