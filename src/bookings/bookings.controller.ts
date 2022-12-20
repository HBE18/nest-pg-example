import { Controller, Get } from '@nestjs/common';

@Controller('bookings')
export class BookingsController {
  @Get()
  getBookings(): { sayHello: string } {
    return { sayHello: 'Hello' };
  }
}
