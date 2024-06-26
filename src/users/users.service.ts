import { Injectable } from '@nestjs/common';
import { clerkClient } from '@clerk/clerk-sdk-node';
//import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create() {
    return 'This action adds a new user';
  }

  async getUsers() {
    return await clerkClient.users.getUserList();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
