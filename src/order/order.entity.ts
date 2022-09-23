import {
  Entity,
  OneToMany,
  JoinColumn,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from '../product/product.entity';
import { Users } from '../auth/user.entity';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToMany((type) => ProductEntity, (item) => item.id)
  items: ProductEntity[];

  @OneToOne((type) => Users, (user) => user.username)
  @JoinColumn()
  user: Users;

  @Column()
  subTotal: number;

  @Column({ default: false })
  pending: boolean;
}
