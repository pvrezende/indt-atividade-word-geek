import { AppDataSource } from "../database/data-source";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";

export class ProductService {
    private productRepository = AppDataSource.getRepository(Product);
    private categoryRepository = AppDataSource.getRepository(Category);

    async create(data: { nome: string; descricao?: string; preco: number; estoque: number; categoriaId: string }) {
        const category = await this.categoryRepository.findOneBy({ id: data.categoriaId });
        if (!category) {
            throw new Error("Categoria não encontrada");
        }

        const product = this.productRepository.create({
            ...data,
            categoria: category
        });
        return await this.productRepository.save(product);
    }

    async listAll() {
        return await this.productRepository.find({ relations: ["categoria"] });
    }

    async findById(id: string) {
        return await this.productRepository.findOne({
            where: { id },
            relations: ["categoria"]
        });
    }

    async update(id: string, data: any) {
        const product = await this.productRepository.findOneBy({ id });
        if (!product) {
            throw new Error("Produto não encontrado");
        }

        if (data.categoriaId) {
            const category = await this.categoryRepository.findOneBy({ id: data.categoriaId });
            if (!category) {
                throw new Error("Categoria não encontrada");
            }
            product.categoria = category;
        }

        this.productRepository.merge(product, data);
        return await this.productRepository.save(product);
    }

    async delete(id: string) {
        const result = await this.productRepository.delete(id);
        if (result.affected === 0) {
            throw new Error("Produto não encontrado");
        }
    }
}
