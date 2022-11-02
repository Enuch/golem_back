import { Module } from '@nestjs/common';
import { MaterialRequestService } from './material_request.service';
import { MaterialRequestController } from './material_request.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [MaterialRequestController],
  providers: [MaterialRequestService, PrismaService],
})
export class MaterialRequestModule {}
