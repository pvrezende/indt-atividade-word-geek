import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
import { ProductController } from "../controllers/ProductController";

const routes = Router();
const categoryController = new CategoryController();
const productController = new ProductController();

// Rotas de Categorias
routes.post("/categories", categoryController.create);
routes.get("/categories", categoryController.list);
routes.get("/categories/:id", categoryController.show);
routes.put("/categories/:id", categoryController.update);
routes.delete("/categories/:id", categoryController.delete);

// Rotas de Produtos
routes.post("/products", productController.create);
routes.get("/products", productController.list);
routes.get("/products/:id", productController.show);
routes.put("/products/:id", productController.update);
routes.delete("/products/:id", productController.delete);

export default routes;
