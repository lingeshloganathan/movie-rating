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
    const data = await this.userService.createUser(input, user);
    return {
      message: 'User created successfully',
      data,
    };
  }

  @Get('allUsers')
  async findAll() {
    const data = await this.userService.findAllUsers();
    return {
      message: 'Users fetched successfully',
      data,
    };
  }

  @Get('me/:id')
  async findOne(@Param('id') id: string, @CurrentUser() user: User) {
    const data = await this.userService.findUserById(id, user);
    return {
      message: 'User fetched successfully',
      data,
    };
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() input: UpdateUserDto) {
    const data = await this.userService.updateUser(id, input);
    return {
      message: 'User updated successfully',
      data,
    };
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    const data = await this.userService.removeUser(id);
    return {
      message: 'User deleted successfully',
      data: {
        id: data.id,
      },
    };
  }
}
