class BaseElement extends HTMLElement {

    get defaultTemplate() {
        const defaultTemplate = `
            <div class="container">
                <div class="row my-4" id="content-list"></div>
            </div>
        `;
        return this.customTemplate(defaultTemplate);
    }

    customTemplate(tmp) {
        const template = document.createElement('template');

        template.innerHTML = tmp;

        return template;
    }
}

export default BaseElement;