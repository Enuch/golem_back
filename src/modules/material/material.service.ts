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
      include: {
        category: true,
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
      data: {
        amount: materialDTO.amount,
        name: materialDTO.name,
        origin: materialDTO.origin,
        category_id: materialDTO.category_id,
      },
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
