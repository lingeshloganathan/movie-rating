import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ActorModule } from './actor/actor.module';

@Module({
  imports: [UserModule, ActorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
