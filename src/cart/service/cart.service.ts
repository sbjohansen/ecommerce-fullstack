import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from '../cart.entity';
import { ProductsService } from '../../product/service/product.service';
import { Users } from 'src/auth/user.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private cartRepository: Repository<CartEntity>,
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private productsService: ProductsService,
  ) {}

  async addToCart(
    productId: string,
    quantity: number,
    username: string,
  ): Promise<void> {
    const product = await this.productsService.getProductById(productId);
    const user = await this.userRepository.findOne({ where: { username } });
    const cartItem = await this.cartRepository.find({
      relations: ['item', 'user'],
    });

    if (cartItem) {
      const item = cartItem.find(
        (item) => item.item.id === product.id && item.user.id === user.id,
      );
      if (item) {
        item.quantity += quantity;
        await this.cartRepository.save(item);
      } else {
        const newCartItem = new CartEntity();
        newCartItem.item = product;
        newCartItem.user = user;
        newCartItem.quantity = quantity;
        await this.cartRepository.save(newCartItem);
      }
    }
  }

  async getItemsInCart(username: string): Promise<CartEntity[]> {
    const userCart = await this.cartRepository.find({
      relations: ['item', 'user'],
    });
    return (await userCart).filter((item) => item.user.username === username);
  }
}
