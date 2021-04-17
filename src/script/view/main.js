import MovieService from '../data/movie-service';
import '../components/app-header';
import '../components/search-bar';
import '../components/movie-container';
import '../components/movie-item';
import '../components/error-message';
import '../components/movie-detail-container';

const main = function() {

    const mainContainer = document.querySelector(".main-container");
    const searchButton = document.querySelector("search-bar");

    const movieContainer = document.createElement("movie-container");
    const errorMessage = document.createElement('error-message');
    
    const showPopularMovies = async () => {
        try {
            const popularMovies = await MovieService.getPopularMovies();
            movieContainer.movies = popularMovies;
            movieContainer.movieClickListener = getMovieDetail;
            showContent(movieContainer);
        } catch (ex) {
            renderError(ex.message);
        }
    }

    const searchMovies = async () => {
        try {
            const query = searchButton.value;
            if (query === undefined || query === '') return;
            searchButton.value = "";
            const movies = await MovieService.searchMovies(query);
            if (movies.length !== 0) {
                movieContainer.movies = movies;
                movieContainer.movieClickListener = getMovieDetail;
                showContent(movieContainer);
                return;
            }
            throw Error("No Movies");
        } catch (ex) {
            renderError(ex.message);
        }
    }

    const getMovieDetail = async (id) => {
        try {
            const movie = await MovieService.getMovieDetail(id);
            if (movie !== null) {
                const movieDetailContainer = document.createElement("movie-detail-container");
                movieDetailContainer.movie = movie;
                showContent(movieDetailContainer);
                return;
            }
            throw Error("Something went wrong. Please try again later.");
        } catch (ex) {
            renderError(ex.message);
        }
    }

    const showContent = (child) => {
        mainContainer.innerHTML = "";
        mainContainer.appendChild(child)
    }

    const renderError = (msg) => {
        errorMessage.errorMessage = msg
        showContent(errorMessage);
    }

    searchButton.searchListener = searchMovies;
    
    showPopularMovies();
}

export default main;