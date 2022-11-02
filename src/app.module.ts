import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { MaterialModule } from './modules/material/material.module';

@Module({
  imports: [UserModule, CategoryModule, MaterialModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
