import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MaterialDTO } from './material.dto';

@Injectable()
export class MaterialService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<MaterialDTO[]> {
    return this.prisma.material.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: number): Promise<MaterialDTO | null> {
    return this.prisma.material.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(materialDTO: MaterialDTO): Promise<MaterialDTO> {
    return this.prisma.material.create({
      data: materialDTO,
    });
  }

  async update(id: number, materialDTO: MaterialDTO): Promise<MaterialDTO> {
    return this.prisma.material.update({
      where: {
        id: id,
      },
      data: materialDTO,
    });
  }

  async remove(id: number): Promise<MaterialDTO> {
    return this.prisma.material.delete({
      where: {
        id: id,
      },
    });
  }
}
