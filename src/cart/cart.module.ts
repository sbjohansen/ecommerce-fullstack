import { Module } from '@nestjs/common';
import { CartService } from './service/cart.service';
import { CartEntity } from './cart.entity';
import { ProductsService } from '../product/service/product.service';
import { ProductEntity } from 'src/product/product.entity';
import { Users } from 'src/auth/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartController } from './controller/cart.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
  providers: [CartService, ProductsService],
  controllers: [CartController],
})
export class CartModule {}
