import {
  Controller,
  Post,
  Get,
  Request,
  Delete,
  Body,
  UseGuards,
} from '@nestjs/common';
import { CartService } from '../service/cart.service';
import { CartEntity } from '../cart.entity';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@Controller('api/v1/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Post()
  async AddToCart(@Body() body, @Request() req): Promise<void> {
    const { productId, quantity, username } = body;
    return await this.cartService.addToCart(productId, quantity, username);
  }

  @Get()
  async getItemsInCart(@Body() body, @Request() req): Promise<CartEntity[]> {
    const { username } = body;
    return await this.cartService.getItemsInCart(username);
  }
}
