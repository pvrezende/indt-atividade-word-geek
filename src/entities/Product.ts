import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Category } from "./Category";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column({ nullable: true })
    descricao: string;

    @Column("decimal", { precision: 10, scale: 2 })
    preco: number;

    @Column("integer")
    estoque: number;

    @CreateDateColumn()
    dataCriacao: Date;

    @UpdateDateColumn()
    dataAtualizacao: Date;

    @ManyToOne(() => Category, (category) => category.produtos, { onDelete: "CASCADE" })
    categoria: Category;
}
