import BaseElement from './base-element';
import './search-bar';

class AppHeader extends BaseElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set listener(listener) {
        this._listener = listener;
        this.render();
    }

    render() {
        this.innerHTML = '';
        const headerTemplate = `
            <div class="bg-black">
                <div class="container">
                    <nav class="navbar-container navbar navbar-expand-lg navbar-dark bg-black p-2">
                        <span class="navbar-brand">Movie Finder</span>
            
                        <div class="ml-auto search-bar-container" id="navbarSupportedContent">
                            
                        </div>
                    </nav>
                </div>
            </div>
        `;

        this.appendChild(this.customTemplate(headerTemplate).content.cloneNode(true));

        const searchBarContainer = this.querySelector('.search-bar-container');
        const searchBarElement = document.createElement('search-bar');
        searchBarElement.searchListener = this._listener;
        searchBarContainer.appendChild(searchBarElement);
    }
}

customElements.define("app-header", AppHeader);