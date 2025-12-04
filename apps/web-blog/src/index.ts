import "@/pages/Home";
import "@/pages/Login";
import "@/pages/NewArticle";
import "@/pages/Register";
import "@/templates/Header";
import "./index.css";
import { Router } from "./router";

const rootEl = document.querySelector("#root");

if (!rootEl) throw new Error("No root element found");

rootEl.innerHTML = `
<app-header></app-header>
<div id="wrapper"></div>
`;

const router = new Router();

const wrapper = document.querySelector("#wrapper");

if (!wrapper) throw new Error("No wrapper element found");

router
	.addRoute("/", () => {
		wrapper.innerHTML = "<app-home></app-home>";
	})
	.addRoute("/login", () => {
		wrapper.innerHTML = "<app-login></app-login>";
	})
	.addRoute("/register", () => {
		wrapper.innerHTML = "<app-register></app-register>";
	})
	.addRoute("/new-article", () => {
		wrapper.innerHTML = "<app-new-article></app-new-article>";
	});

router.init();
