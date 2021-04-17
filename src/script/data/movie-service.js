import { MovieAPI } from './api-config';
import _ from 'lodash';

export default class MovieService {

    static async getPopularMovies() {
        try {
            const response = await fetch(MovieAPI.getPopularMovies);
            const data = await response.json();
            return Promise.resolve(data.results);
        } catch (ex) {
            return Promise.reject(ex);
        }
    }

    static async searchMovies(query) {
        try {
            const response = await fetch(MovieAPI.searchMovies(query));
            const data = await response.json();
            const sortedData = _.orderBy(data.results, ['release_date'], 'desc');
            return Promise.resolve(sortedData);
        } catch (ex) {
            return Promise.reject(ex);
        }
    }

    static async getMovieDetail(id) {
        try {
            const response = await fetch(MovieAPI.getMovieDetail(id));
            const data = await response.json();
            return Promise.resolve(data);
        } catch (ex) {
            return Promise.reject(ex);
        }
    }
}