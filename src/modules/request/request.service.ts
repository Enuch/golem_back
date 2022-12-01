import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { RequestDTO } from './request.dto';

@Injectable()
export class RequestService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<RequestDTO[]> {
    return this.prisma.request.findMany({
      orderBy: {
        created_date: 'desc',
      },
      where: {
        active: true,
      },
      include: {
        requested_user: true,
        material_request: {
          include: {
            material: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<RequestDTO | null> {
    return this.prisma.request.findUnique({
      where: {
        id: id,
      },
      include: {
        requested_user: true,
        material_request: {
          include: {
            material: true,
          },
        },
      },
    });
  }

  async create(requestDTO: RequestDTO): Promise<RequestDTO> {
    return this.prisma.request.create({
      data: requestDTO,
    });
  }

  async update(id: number, requestDTO: RequestDTO): Promise<RequestDTO> {
    return this.prisma.request.update({
      where: {
        id: id,
      },
      data: requestDTO,
    });
  }

  async remove(id: number): Promise<RequestDTO> {
    return this.prisma.request.update({
      where: {
        id: id,
      },
      data: {
        active: false,
      },
    });
  }
}
