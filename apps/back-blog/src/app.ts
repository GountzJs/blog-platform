import cors from "cors";
import express, { Express } from "express";
import morgan from "morgan";

export class App {
  private app: Express;

  constructor() {
    this.app = express();
  }

  private initMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors({ origin: ["*"] }));
    this.app.use(morgan("dev"));
  }

  listen(): void {
    this.initMiddleware();
    this.app.listen(8080, () => {
      console.log("🚀 Server running on http://localhost:8080");
    });
  }
}
