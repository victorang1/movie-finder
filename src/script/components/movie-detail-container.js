import { BASE_IMG_PATH } from '../data/api-config';

class MovieDetailContainer extends HTMLElement {

    constructor() {
        super();
    }

    set movie(mov) {
        this._movie = mov;
        this.render();
    }

    render() {
        const { poster_path, title, overview, popularity } = this._movie;
        this.innerHTML =  `
            <div class="detail-container">
                <div class="card-container p-4 my-3 d-flex flex-row">
                    <img class="card-img-top img-content" src="${BASE_IMG_PATH}${poster_path}" alt="Card image cap">
                    <div class="card-content-body">
                        <div class="show-title">
                            ${title}
                        </div>
                        <div class="content-title">Popularity</div>
                        <div class="show-desc mb-1 text-popularity">
                            ${popularity}
                        </div>
                        <div class="content-title">Overview</div>
                        <div class="show-desc mb-3">
                            ${overview}
                        </div>
                        <button id="btn-star" class="btn btn-dark btn-rounded text-white" data-toggle="tooltip" data-placement="top" title="Rate this movie">
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </button>
                        <button id="btn-bookmark" class="btn btn-dark btn-rounded text-white ml-2" data-toggle="tooltip" data-placement="top" title="Add movie to watchlist">
                            <i class="fa fa-bookmark" aria-hidden="true"></i>
                        </button>
                        <button id="btn-heart" class="btn btn-dark btn-rounded text-white ml-2" data-toggle="tooltip" data-placement="top" title="Add to favorite">
                            <i class="fa fa-heart" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        this.querySelector('#btn-star').addEventListener('click', () => alert("Rate features will be available soon"));
        this.querySelector('#btn-bookmark').addEventListener('click', () => alert("Bookmark features will be available soon"));
        this.querySelector('#btn-heart').addEventListener('click', () => alert("favorite features will be available soon"));
    }
}

customElements.define("movie-detail-container", MovieDetailContainer);