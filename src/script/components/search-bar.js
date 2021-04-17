class SearchBar extends HTMLElement {

    constructor() {
        super();
        this._placeholder = "Search some movies...";
    }

    connectedCallback() {
        this.render();
    }

    set searchListener(listener) {
        this._searchListener = listener;
        this.render();
    }

    set value(value) {
        this._value = value;
        this.render();
    }

    get value() {
        return this.querySelector(".search-input").value;
    }

    render() {
        this.innerHTML = `
            <div class="search-field">
                <input class="search-input" placeholder="${this._placeholder}" type="search" value="${this._value || ''}" aria-label="Search">
                <span id="search-button">
                    <i class="fa fa-search mr-3" aria-hidden="true"></i>
                </span>
            </div>
        `
        this.querySelector('#search-button').addEventListener("click", this._searchListener);
    }
}

customElements.define("search-bar", SearchBar);