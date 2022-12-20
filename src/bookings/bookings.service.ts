import { Injectable } from '@nestjs/common';
import { tparam } from 'src/common/db/db.models';
import { DbService } from 'src/common/db/db.service';

@Injectable()
export class BookingsService {
  constructor(private readonly dbService: DbService) {}

  async getBookings() {
    //params: tparam
    /*if (params.filterParams.params.length !== 0) {
      return await this.dbService.getData(params.filterParams.params,params.filterParams.values,params.limit);
    }*/
    return await this.dbService.getData();
  }

  async getBooking(bookingId: string, params?: tparam) {
    let param: string[] = ['id'];
    let value: string[] = [`${bookingId}`];
    return await this.dbService.getData(param, value);
  }
}
