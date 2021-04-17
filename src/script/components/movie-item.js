import { BASE_IMG_PATH } from '../data/api-config';

class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.setAttribute("movieId", movie.id);
        this.render();
    }

    render() {
        const { poster_path, title, overview } = this._movie;
        this.shadowDOM.innerHTML = `
            <style>
                .show-container {
                    display: inline-block;
                    width: 200px;
                    height: 50%;
                    border-radius: 8px;
                    margin-top: 12px;
                    margin-left: 8px;
                    margin-right: 8px;
                }
                
                .show-img img {
                    width: 100%;
                    height: auto;
                    max-height: 280px;
                    border-radius: 8px;
                }
                
                .show-img img:hover {
                    cursor: pointer;
                    outline: none;
                    background-color: transparent;
                    border: none;
                    border-radius: 8px;
                    box-shadow: 1px 1px 2px 3px lightgrey;
                }
                
                .show-title {
                    margin-top: 4px;
                    font-weight: bold;
                    font-size: 14px;
                    font-family: "Roboto", sans-serif;
                    white-space: nowrap;
                    text-align: left;
                    color: black;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                
                .show-title:hover {
                    cursor: pointer;
                    color: #e64724;
                }
                
                .show-desc {
                    margin-top: 4px;
                    font-size: 14px;
                    color: #6a6e7e;
                    font-family: "Open Sans", sans-serif;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            </style>
            <div class="show-container" id="movie-item">
                <div class="show-img">
                    <img src="${BASE_IMG_PATH}${poster_path}" alt="">
                </div>
                <div class="show-title">
                    ${title}
                </div>
                <div class="show-desc">
                    ${overview}
                </div>
            </div>
        `
    }
}

customElements.define("movie-item", MovieItem);