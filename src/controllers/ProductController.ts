import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";
import { createProductSchema, updateProductSchema } from "../validates/productValidate";

const productService = new ProductService();

export class ProductController {
    async create(req: Request, res: Response) {
        try {
            const data = createProductSchema.parse(req.body);
            const product = await productService.create(data);
            return res.status(201).json(product);
        } catch (error: any) {
            return res.status(400).json({ error: error.message || error.errors });
        }
    }

    async list(req: Request, res: Response) {
        const products = await productService.listAll();
        return res.json(products);
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const product = await productService.findById(id);
            if (!product) return res.status(404).json({ error: "Produto não encontrado" });
            return res.json(product);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = updateProductSchema.parse(req.body);
            const product = await productService.update(id, data);
            return res.json(product);
        } catch (error: any) {
            return res.status(400).json({ error: error.message || error.errors });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await productService.delete(id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
