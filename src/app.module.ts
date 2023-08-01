import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [CategoriesModule, PrismaModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
