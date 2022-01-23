const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=053fe239a391d75219241ccb0a07c2dc';

async function fetchWithErrorHandling(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('not found'));
}

export const fetchMoviesTrending = () => {
  const URL = `${BASE_URL}/trending/movie/day${API_KEY}&language=ru`;
  return fetchWithErrorHandling(URL);
};
export const fetchMovieDetails = idMovie => {
  const URL = `${BASE_URL}/movie/${idMovie}${API_KEY}&language=ru`;
  return fetchWithErrorHandling(URL);
};
export const fetchMovieCast = idMovie => {
  const URL = `${BASE_URL}/movie/${idMovie}/credits${API_KEY}`;
  return fetchWithErrorHandling(URL);
};
export const fetchMovieReviews = idMovie => {
  const URL = `${BASE_URL}/movie/${idMovie}/reviews${API_KEY}&page=1`;
  return fetchWithErrorHandling(URL);
};
export const fetchMovieSearch = query => {
  const URL = `${BASE_URL}/search/movie${API_KEY}&query=${query}&language=ru&page=1&include_adult=false`;
  return fetchWithErrorHandling(URL);
};
