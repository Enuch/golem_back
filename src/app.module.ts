import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { MaterialModule } from './modules/material/material.module';
import { RequestModule } from './modules/request/request.module';

@Module({
  imports: [UserModule, CategoryModule, MaterialModule, RequestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
