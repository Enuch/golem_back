import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaterialDTO } from './material.dto';
import { MaterialService } from './material.service';

@Controller('material')
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Post()
  create(@Body() materialDTO: MaterialDTO) {
    return this.materialService.create(materialDTO);
  }

  @Get()
  findAll() {
    return this.materialService.findAll();
  }

  @Get('/findOrderAscAmount')
  findAllByMinorAmount() {
    return this.materialService.findAllByMinorAmount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.materialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() materialDTO: MaterialDTO) {
    return this.materialService.update(+id, materialDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.materialService.remove(+id);
  }
}
