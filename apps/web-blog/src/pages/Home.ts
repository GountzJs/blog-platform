export class Home extends HTMLElement {
	constructor() {
		super();
		this.render();
	}

	private render() {
		this.innerHTML = `
            <h1>BLog Platform!!</h1>
        `;
	}
}

customElements.define("app-home", Home);
