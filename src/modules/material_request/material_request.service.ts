import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MaterialRequestDTO } from './material_request.dto';

@Injectable()
export class MaterialRequestService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<MaterialRequestDTO[]> {
    return this.prisma.material_Request.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findOne(id: number): Promise<MaterialRequestDTO | null> {
    return this.prisma.material_Request.findFirst({
      where: {
        request_id: id,
      },
    });
  }

  async create(
    materialRequestDTO: MaterialRequestDTO,
  ): Promise<MaterialRequestDTO> {
    return this.prisma.material_Request.create({
      data: materialRequestDTO,
    });
  }

  async update(
    id: number,
    materialRequestDTO: MaterialRequestDTO,
  ): Promise<MaterialRequestDTO> {
    return this.prisma.material_Request.update({
      where: {
        id: id,
      },
      data: materialRequestDTO,
    });
  }

  async remove(id: number): Promise<MaterialRequestDTO> {
    return this.prisma.material_Request.delete({
      where: {
        id: id,
      },
    });
  }
}
