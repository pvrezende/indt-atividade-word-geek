import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    nome: string;

    @Column({ nullable: true })
    descricao: string;

    @CreateDateColumn()
    dataCriacao: Date;

    @UpdateDateColumn()
    dataAtualizacao: Date;

    @OneToMany(() => Product, (product) => product.categoria)
    produtos: Product[];
}
