import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { CurrentUser } from 'src/decorators/current-user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() input: CreateUserDto, @CurrentUser() user: User) {
    return {
      message: 'User created successfully',
      data: await this.userService.createUser(input, user),
    };
  }

  @Get('allUsers')
  async findAll() {
    return {
      message: 'Users fetched successfully',
      data: await this.userService.findAllUsers(),
    };
  }

  @Get('me/:id')
  async findOne(@Param('id') id: string, @CurrentUser() user: User) {
    return {
      message: 'User fetched successfully',
      data: await this.userService.findUserById(id, user),
    };
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() input: UpdateUserDto) {
    return {
      message: 'User updated successfully',
      data: await this.userService.updateUser(id, input),
    };
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return {
      message: 'User deleted successfully',
      data: await this.userService.removeUser(id),
    };
  }
}
