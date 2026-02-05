import "reflect-metadata";
import { DataSource } from "typeorm";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "mundo_geek",
    synchronize: true, // Apenas para desenvolvimento
    logging: false,
    entities: [Category, Product],
    migrations: [],
    subscribers: [],
});
