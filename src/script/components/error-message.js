import Error from '../../assets/images/error.png';

class ErrorMessage extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set errorMessage(msg) {
        this._errMessage = msg;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .error-container {
                    margin-top: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .img-container {
                    display: flex;
                    justify-content: center;
                }

                .error-img {
                    width: 300px;
                    height: 300px;
                }

                .text-error {
                    text-align: center;
                }
            </style>
            <div class="error-container">
                <div class="img-container"><img class="error-img" src="${Error}"></img></div>
                <h2 class="text-error">${this._errMessage}</h2>
            </div>
        `
    }
}

customElements.define("error-message", ErrorMessage);