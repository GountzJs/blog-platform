import "./index.css";

const rootEl = document.querySelector("#root");

if (rootEl) {
	rootEl.innerHTML = `
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
`;
}
