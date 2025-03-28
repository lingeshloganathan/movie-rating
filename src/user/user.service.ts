import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/primsa/prisma.service';
import { createUserSelect } from 'src/primsa/query-select';
import { RecordStatus, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(input: CreateUserDto, user: User) {
    const data = await this.prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        countryCode: input.countryCode,
        phoneNumber: input.phoneNumber,
        gender: input.gender,
        dob: input.dob,
      },
      select: createUserSelect,
    });
    return data;
  }

  async findAllUsers() {
    const data = await this.prisma.user.findMany({
      where: {
        recordStatus: RecordStatus.ACTIVE,
      },
      select: createUserSelect,
    });
    return data;
  }

  async findUserById(id: string, user: User) {
    const data = await this.prisma.user.findUnique({
      where: {
        id,
        recordStatus: RecordStatus.ACTIVE,
      },
      select: createUserSelect,
    });
    return data;
  }

  async updateUser(id: string, input: UpdateUserDto) {
    const data = await this.prisma.user.update({
      where: {
        id,
        recordStatus: RecordStatus.ACTIVE,
      },
      data: {
        name: input.name,
        email: input.email,
        countryCode: input.countryCode,
        phoneNumber: input.phoneNumber,
        gender: input.gender,
      },
      select: createUserSelect,
    });
    return data;
  }

  async removeUser(id: string) {
    const data = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return data;
  }
}
