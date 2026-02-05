import { z } from "zod";

export const createProductSchema = z.object({
    nome: z.string().min(1, "O nome é obrigatório"),
    descricao: z.string().optional(),
    preco: z.number().positive("O preço deve ser maior que zero"),
    estoque: z.number().int().min(0, "O estoque não pode ser negativo"),
    categoriaId: z.string().uuid("ID de categoria inválido"),
});

export const updateProductSchema = z.object({
    nome: z.string().min(1, "O nome é obrigatório").optional(),
    descricao: z.string().optional(),
    preco: z.number().positive("O preço deve ser maior que zero").optional(),
    estoque: z.number().int().min(0, "O estoque não pode ser negativo").optional(),
    categoriaId: z.string().uuid("ID de categoria inválido").optional(),
});
