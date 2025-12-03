import { App } from "./app";

function bootstrap(): void {
	const app = new App();
	app.initModules([]);
	app.listen();
}

bootstrap();
