import { AppDataSource } from "../database/data-source";
import { Category } from "../entities/Category";

export class CategoryService {
    private categoryRepository = AppDataSource.getRepository(Category);

    async create(data: { nome: string; descricao?: string }) {
        const categoryExists = await this.categoryRepository.findOneBy({ nome: data.nome });
        if (categoryExists) {
            throw new Error("Categoria já existe");
        }
        const category = this.categoryRepository.create(data);
        return await this.categoryRepository.save(category);
    }

    async listAll() {
        return await this.categoryRepository.find({ relations: ["produtos"] });
    }

    async findById(id: string) {
        return await this.categoryRepository.findOne({
            where: { id },
            relations: ["produtos"]
        });
    }

    async update(id: string, data: { nome?: string; descricao?: string }) {
        const category = await this.categoryRepository.findOneBy({ id });
        if (!category) {
            throw new Error("Categoria não encontrada");
        }
        this.categoryRepository.merge(category, data);
        return await this.categoryRepository.save(category);
    }

    async delete(id: string) {
        const result = await this.categoryRepository.delete(id);
        if (result.affected === 0) {
            throw new Error("Categoria não encontrada");
        }
    }
}
