import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaterialRequestDTO } from './material_request.dto';
import { MaterialRequestService } from './material_request.service';

@Controller('material-request')
export class MaterialRequestController {
  constructor(
    private readonly materialRequestService: MaterialRequestService,
  ) {}

  @Post()
  create(@Body() materialRequestDTO: MaterialRequestDTO) {
    return this.materialRequestService.create(materialRequestDTO);
  }

  @Get()
  findAll() {
    return this.materialRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materialRequestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() materialRequestDTO: MaterialRequestDTO,
  ) {
    return this.materialRequestService.update(+id, materialRequestDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialRequestService.remove(+id);
  }
}
