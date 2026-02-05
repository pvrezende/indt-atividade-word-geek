import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/data-source";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });
