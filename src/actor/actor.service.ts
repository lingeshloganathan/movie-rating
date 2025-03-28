import { Injectable } from '@nestjs/common';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { PrismaService } from 'src/primsa/prisma.service';
import { actorSelect } from 'src/primsa/query-select';
import { RecordStatus } from '@prisma/client';

@Injectable()
export class ActorService {
  constructor(private readonly prisma: PrismaService) {}
  async createActor(input: CreateActorDto) {
    const data = await this.prisma.actor.create({
      data: {
        name: input.name,
        gender: input.gender,
        dob: input.dob,
        biography: input.biography,
        // movies: {
        //   connect: {
        //     id: input.movieId,
        //   },
        // },
      },
      select: actorSelect,
    });
    return data;
  }

  async findAllActors() {
    const data = await this.prisma.actor.findMany({
      where: {
        recordStatus: RecordStatus.ACTIVE,
      },
      select: actorSelect,
    });
    return data;
  }

  async findActorById(id: string) {
    const data = await this.prisma.actor.findUnique({
      where: {
        id,
        recordStatus: RecordStatus.ACTIVE,
      },
      select: actorSelect,
    });
    return data;
  }
  async updateActor(id: string, input: UpdateActorDto) {
    const data = await this.prisma.actor.update({
      where: {
        id,
        recordStatus: RecordStatus.ACTIVE,
      },
      data: {
        name: input.name,
        gender: input.gender,
        dob: input.dob,
        biography: input.biography,
      },
      select: actorSelect,
    });
    return data;
  }

  async removeActor(id: string) {
    const data = await this.prisma.actor.update({
      where: {
        id,
      },
      data: {
        recordStatus: RecordStatus.INACTIVE,
      },
    });
    return data;
  }
}
