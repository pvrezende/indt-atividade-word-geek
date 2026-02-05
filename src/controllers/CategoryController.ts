import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";
import { createCategorySchema, updateCategorySchema } from "../validates/categoryValidate";

const categoryService = new CategoryService();

export class CategoryController {
    async create(req: Request, res: Response) {
        try {
            const data = createCategorySchema.parse(req.body);
            const category = await categoryService.create(data);
            return res.status(201).json(category);
        } catch (error: any) {
            return res.status(400).json({ error: error.message || error.errors });
        }
    }

    async list(req: Request, res: Response) {
        const categories = await categoryService.listAll();
        return res.json(categories);
    }

    async show(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await categoryService.findById(id);
            if (!category) return res.status(404).json({ error: "Categoria não encontrada" });
            return res.json(category);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = updateCategorySchema.parse(req.body);
            const category = await categoryService.update(id, data);
            return res.json(category);
        } catch (error: any) {
            return res.status(400).json({ error: error.message || error.errors });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await categoryService.delete(id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}
