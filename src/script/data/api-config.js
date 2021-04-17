const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '729434973f000771342b5aeea19d4630';
const PARAM_API_KEY = `api_key=${API_KEY}`;
const PARAM_QUERY = (query) => `query=${query}`;
export const BASE_IMG_PATH = 'https://image.tmdb.org/t/p/w500';

export const MovieAPI = {
    getPopularMovies: `${BASE_URL}/movie/popular?${PARAM_API_KEY}`,
    searchMovies: (query) => `${BASE_URL}/search/movie?${PARAM_API_KEY}&${PARAM_QUERY(query)}`,
    getMovieDetail: (id) => `${BASE_URL}/movie/${id}?${PARAM_API_KEY}`
}