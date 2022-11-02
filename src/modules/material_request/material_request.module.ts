import { Module } from '@nestjs/common';
import { MaterialRequestService } from './material_request.service';
import { MaterialRequestController } from './material_request.controller';

@Module({
  controllers: [MaterialRequestController],
  providers: [MaterialRequestService]
})
export class MaterialRequestModule {}
