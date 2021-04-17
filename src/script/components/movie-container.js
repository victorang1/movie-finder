import './movie-item';
import BaseElement from './base-element';

class MovieContainer extends BaseElement {

    constructor() {
        super();
    }

    set movieClickListener(listener) {
        this.querySelectorAll('movie-item').forEach(item => {
            item.addEventListener('click',() => {
                const movieId = item.getAttribute("movieId");
                console.log('test');
                listener(movieId);
            });
        });
    }

    set movies(movies) {
        this._movies = movies;
        this.innerHTML = "";
        this.appendChild(this.defaultTemplate.content.cloneNode(true));

        const contentList = this.querySelector('#content-list');

        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            contentList.appendChild(movieItemElement);
        });
    }
}

customElements.define("movie-container", MovieContainer);