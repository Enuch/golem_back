import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserDTO[]> {
    return this.prisma.user.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  async findOne(id: number): Promise<UserDTO | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(userDTO: UserDTO): Promise<UserDTO> {
    return this.prisma.user.create({
      data: userDTO,
    });
  }

  async update(id: number, userDTO: UserDTO): Promise<UserDTO> {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: userDTO,
    });
  }

  async remove(id: number): Promise<UserDTO> {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
