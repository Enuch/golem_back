import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { MaterialModule } from './modules/material/material.module';
import { RequestModule } from './modules/request/request.module';
import { MaterialRequestModule } from './modules/material_request/material_request.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    UserModule,
    CategoryModule,
    MaterialModule,
    RequestModule,
    MaterialRequestModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
