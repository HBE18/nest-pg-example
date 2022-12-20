import { DbService } from 'src/common/db/db.service';
import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';

@Module({
  providers: [BookingsService,DbService],
  controllers: [BookingsController],
})
export class BookingsModule {}
