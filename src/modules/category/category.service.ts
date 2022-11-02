import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryDTO } from './category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CategoryDTO[]> {
    return this.prisma.category.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: number): Promise<CategoryDTO | null> {
    return this.prisma.category.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(categoryDTO: CategoryDTO): Promise<CategoryDTO> {
    return this.prisma.category.create({
      data: categoryDTO,
    });
  }

  async update(id: number, categoryDTO: CategoryDTO): Promise<CategoryDTO> {
    return this.prisma.category.update({
      where: {
        id: id,
      },
      data: categoryDTO,
    });
  }

  async remove(id: number): Promise<CategoryDTO> {
    return this.prisma.category.delete({
      where: {
        id: id,
      },
    });
  }
}
