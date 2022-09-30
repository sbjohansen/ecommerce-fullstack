import { Controller, Get, Body, Post } from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { CategoryEntity } from '../category.entity';

@Controller('api/v1/categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async GetAll(): Promise<CategoryEntity[]> {
    return await this.categoryService.getAll();
  }

  @Post()
  async Create(@Body() category: CategoryEntity): Promise<CategoryEntity> {
    return await this.categoryService.create(category);
  }
}
