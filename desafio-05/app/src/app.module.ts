import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivesController } from './lives/lives.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Live } from './lives/live.entity';
import { LivesService } from './lives/lives.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'db.sqlite3'),
      entities: [Live],
    }),
    TypeOrmModule.forFeature([Live])
  ],
  controllers: [AppController, LivesController],
  providers: [AppService, LivesService],
})
export class AppModule {}
