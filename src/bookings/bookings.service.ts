import { Injectable } from '@nestjs/common';
import { DbService } from 'src/common/db/db.service';
import { tparam } from './bookings.controller';


@Injectable()
export class BookingsService {
  constructor(private readonly dbService: DbService) { }
  
  getBookings(params: tparam) {
    return this.dbService.getData()
  }
  
  getBooking(bookingId: string) {
    return this.dbService.getData
  }

}
