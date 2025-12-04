export class NewArticle extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <h1>Home</h1>
        `;
	}
}

customElements.define("app-new-article", NewArticle);
