import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { MaterialModule } from './modules/material/material.module';
import { RequestModule } from './modules/request/request.module';
import { MaterialRequestModule } from './modules/material_request/material_request.module';

@Module({
  imports: [
    UserModule,
    CategoryModule,
    MaterialModule,
    RequestModule,
    MaterialRequestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
