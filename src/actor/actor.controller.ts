import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post()
  async create(@Body() input: CreateActorDto) {
    const data = await this.actorService.createActor(input);
    return {
      message: 'Actor created successfully',
      data,
    };
  }

  @Get('allActors')
  async findAll() {
    const data = await this.actorService.findAllActors();
    return {
      message: 'Actors fetched successfully',
      data,
    };
  }

  @Get('me/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.actorService.findActorById(id);
    return {
      message: 'Actor fetched successfully',
      data,
    };
  }

  @Patch('updateActor/:id')
  async update(@Param('id') id: string, @Body() input: UpdateActorDto) {
    const data = await this.actorService.updateActor(id, input);
    return {
      message: 'Actor updated successfully',
      data,
    };
  }

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
