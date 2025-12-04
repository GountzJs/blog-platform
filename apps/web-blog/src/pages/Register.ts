export class Register extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <h1>Register</h1>
        `;
	}
}

customElements.define("app-register", Register);
