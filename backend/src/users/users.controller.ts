import { Body, Controller, Post, Get } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  // @Post()
  // create(@Body() createUser: CreateUserDto) {
  //   this.users.push(createUser); // ユーザーを登録
  //   return createUser;
  // }

  @Post()
  async signupUser(
    @Body() userData: { username: string; email: string; password: string },
  ): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAllUsers(); // Assuming findAllUsers method exists in UserService
  }
}
