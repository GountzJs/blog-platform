export class Header extends HTMLElement {
	constructor() {
		super();
		this.render();
	}

	private render(): void {
		this.innerHTML = `
            <header class="bg-black border-b-[1px] border-gray-600 shadow-lg flex items-center justify-between px-[190px] py-4 w-full">
                <a href="/" data-link class="flex items-center gap-4 w-fit">
                    <img src="/avatar.png" loading="lazy" decoding="sync" width="60" height="60" alt="Logo">
                    <p class="font-black text-3xl">Gountz Blog</p>         
                </a>
                <nav class="flex items-center justify-center gap-6 h-fit w-fit">
                    <a class="font-semibold text-lg text-gray-400 hover:text-white transition-colors duration-300" href="/" data-link>
                        Home
                    </a>
                    <a class="font-semibold text-lg text-gray-400 hover:text-white transition-colors duration-300" href="/new-article" data-link>
                        New Article
                    </a>
                    <a class="font-semibold text-lg text-gray-400 hover:text-white transition-colors duration-300" href="/login" data-link>
                        Login
                    </a>
                    <a class="font-semibold text-lg text-gray-400 hover:text-white transition-colors duration-300" href="/register" data-link>
                        Register
                    </a>
                </nav>
            </header>
        `;
	}
}

customElements.define("app-header", Header);
