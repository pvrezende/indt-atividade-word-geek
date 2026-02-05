import { z } from "zod";

export const createCategorySchema = z.object({
    nome: z.string().min(1, "O nome é obrigatório"),
    descricao: z.string().optional(),
});

export const updateCategorySchema = z.object({
    nome: z.string().min(1, "O nome é obrigatório").optional(),
    descricao: z.string().optional(),
});
