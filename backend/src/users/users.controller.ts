import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  private users = [];

  @Post()
  create(@Body() createUser: CreateUserDto) {
    this.users.push(createUser); // ユーザーを登録
    return createUser;
  }

  @Get()
  findAll() {
    return this.users; // 全てのユーザーを返す
  }
}
