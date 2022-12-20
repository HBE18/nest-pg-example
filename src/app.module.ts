import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import { DbService } from './common/db/db.service';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [BookingsModule, ConfigModule.forRoot({
    envFilePath: './src/common/envs/.env',
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService, DbService],
})
export class AppModule {}
