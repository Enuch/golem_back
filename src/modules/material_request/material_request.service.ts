import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
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
      include: {
        material: true,
      },
    });
  }

  async findOne(id: number): Promise<MaterialRequestDTO | null> {
    return this.prisma.material_Request.findFirst({
      where: {
        request_id: id,
      },
      include: {
        material: true,
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

  async createMany(
    materialRequestDTO: MaterialRequestDTO[],
  ): Promise<Prisma.BatchPayload> {
    const data = this.prisma.material_Request.createMany({
      data: materialRequestDTO,
    });

    return data;
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
