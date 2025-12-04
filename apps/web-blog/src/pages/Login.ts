export class Login extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
			<main>
				<h1>Login</h1>
			</main>
        `;
	}
}

customElements.define("app-login", Login);
