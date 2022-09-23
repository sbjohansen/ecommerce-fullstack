import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from 'src/product/product.entity';
import { CartService } from 'src/cart/service/cart.service';
import { CartEntity } from 'src/cart/cart.entity';
import { ProductsService } from '../product/service/product.service';
import { OrderService } from './service/order.service';
import { OrderController } from './controller/order.controller';
import { Users } from 'src/auth/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, Users]),
  ],

  controllers: [OrderController],
  providers: [OrderService, CartService, ProductsService],
})
export class OrderModule {}
