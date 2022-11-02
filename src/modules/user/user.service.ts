import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  create(userDTO: UserDTO) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, userDTO: UserDTO) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
