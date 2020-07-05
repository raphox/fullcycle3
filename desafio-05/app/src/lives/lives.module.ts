
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Live } from './live.entity';
import { LivesController } from './lives.controller';
import { LivesService } from './lives.service';

@Module({
  imports: [TypeOrmModule.forFeature([Live])],
  providers: [LivesService],
  controllers: [LivesController],
})
export class LivesModule {}