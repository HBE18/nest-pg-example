import { Controller, Get, Query, Param } from '@nestjs/common';
import { BookingsService } from './bookings.service';

type filterParam = {
  params: any[];
  values: any[];
};

export type tparam = {
  limit: number,
  page: number,
  filterParams: filterParam
}

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  getBookings(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Param('id') bookingID: string,
  ): {} {
    limit = limit > 100 ? 100 : limit;
    let fparams: filterParam = {
      params: [],
      values: []
    }
    if (bookingID) {
      fparams.params.push('id');
      fparams.values.push(bookingID);
    }
    const params:tparam = {
      limit: limit,
      page: page,
      filterParams: fparams,
    };
    return this.bookingsService.getBookings(params);
  }
}
