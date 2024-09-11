import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  nombre: string;

  @Column({ nullable: true })
  descripcion?: string;

  @Column('decimal')
  precio: number;

  @Column('int')
  stock: number;

  @CreateDateColumn()
  fechaCreacion: Date;
}
