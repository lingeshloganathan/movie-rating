import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import {
  CREATE_ACTOR,
  READ_ALL_ACTOR,
  READ_ACTOR,
  UPDATE_ACTOR,
  DELETE_ACTOR,
} from 'script/const/permission.const';
import { Permissions } from 'src/base/guard/permission';
import { FilterActorDto } from './dto/filter-actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Permissions(CREATE_ACTOR)
  @Post()
  async create(@Body() input: CreateActorDto) {
    const data = await this.actorService.createActor(input);
    return {
      message: 'Actor created successfully',
      data,
    };
  }

  @Permissions(READ_ALL_ACTOR)
  @Get('allActors')
  async findAll(@Body() input: FilterActorDto) {
    const data = await this.actorService.findAllActors(input);
    return {
      message: 'Actors fetched successfully',
      data,
    };
  }

  @Permissions(READ_ACTOR)
  @Get('me/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.actorService.findActorById(id);
    return {
      message: 'Actor fetched successfully',
      data,
    };
  }

  @Permissions(UPDATE_ACTOR)
  @Patch('updateActor/:id')
  async update(@Param('id') id: string, @Body() input: UpdateActorDto) {
    const data = await this.actorService.updateActor(id, input);
    return {
      message: 'Actor updated successfully',
      data,
    };
  }

  @Permissions(DELETE_ACTOR)
  @Delete('deleteActor/:id')
  async remove(@Param('id') id: string) {
    const data = await this.actorService.removeActor(id);
    return {
      message: 'Actor deleted successfully',
      data: {
        id: data.id,
      },
    };
  }
}
