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
import { Permissions } from 'src/base/guard/permission';
import {
  CREATE_USER,
  DELETE_USER,
  READ_ALL_USER,
  READ_USER,
  UPDATE_USER,
} from 'script/const/permission.const';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Permissions(CREATE_USER)
  @Post()
  async create(@Body() input: CreateUserDto, @CurrentUser() user: User) {
    const data = await this.userService.createUser(input, user);
    return {
      message: 'User created successfully',
      data,
    };
  }

  @Permissions(READ_ALL_USER)
  @Get('allUsers')
  async findAll() {
    const data = await this.userService.findAllUsers();
    return {
      message: 'Users fetched successfully',
      data,
    };
  }

  @Permissions(READ_USER)
  @Get('me/:id')
  async findOne(@Param('id') id: string, @CurrentUser() user: User) {
    const data = await this.userService.findUserById(id, user);
    return {
      message: 'User fetched successfully',
      data,
    };
  }

  @Permissions(UPDATE_USER)
  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() input: UpdateUserDto) {
    const data = await this.userService.updateUser(id, input);
    return {
      message: 'User updated successfully',
      data,
    };
  }

  @Permissions(DELETE_USER)
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
