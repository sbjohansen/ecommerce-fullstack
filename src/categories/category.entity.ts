import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  name: string;

  @Column()
  image: string;
}
