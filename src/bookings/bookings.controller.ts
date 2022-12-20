import { Controller, Get, Query, Param } from '@nestjs/common';
import { filterParam, tparam } from 'src/common/db/db.models';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  getBookings(
    /*
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    */
  ): {} {
    /*
    limit = limit > 100 ? 100 : limit;
    let fparams: filterParam = {
      params: [],
      values: [],
    };
    const params: tparam = {
      limit: limit,
      page: page,
      filterParams: fparams,
    };
    */
    return this.bookingsService.getBookings();
  }

  @Get(':id')
  getBooking(@Param('id') bookingID: string) {
    /*
    let fparams: filterParam = {
      params: [],
      values: [],
    };
    if (bookingID) {
      fparams.params.push('id');
      fparams.values.push(bookingID);
    }
    */
    return this.bookingsService.getBooking(bookingID);
  }
}
