import { listUser, selectQueryResult } from './db.models';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Client, QueryResult } from 'pg';

type resObj = {
  Results: listUser[];
};

type filterList = {
  user_firstname: boolean,
  user_lastname: boolean,
  booking_startsat: boolean,
  appartment_name: boolean,
  confirmed: boolean,
  filter_count: number
}

type filterParams = {
  user_firstname?: string;
  user_lastname?: string;
  booking_startsat?: string;
  appartment_name?: string;
  confirmed?: number;
};

@Injectable()
export class DbService {
  private readonly client: Client;

  constructor(private readonly ConfigService: ConfigService) {
    const dbConf = {
      host: this.ConfigService.get<string>('DATABASE_HOST'),
      port: this.ConfigService.get<number>('DATABASE_PORT'),
      user: this.ConfigService.get<string>('DATABASE_USER'),
      password: this.ConfigService.get<string>('DATABASE_PASSWORD'),
      database: this.ConfigService.get<string>('DATABASE_NAME'),
    };
    this.client = new Client(dbConf);
    this.client.connect();
  }

  async getData(filters: filterList, filterParams: filterParams): Promise<resObj> {
    var query = `
      SELECT
        us.first_name,
        us.last_name,
        us.email,
        us.phone,
        ap.name,
        ap.address,
        ap.address2,
        ap.zip_code,
        ap.city,
        ap.country,
        bk.starts_at,
        bk.booked_for,
        bk.confirmed
      FROM bookings AS bk
      LEFT JOIN appartments AS ap
      ON ap.id = bk.apartment_id
      LEFT JOIN users AS us
      ON us.id = bk.user_id
    `;
    const queryRes = await this.client.query(query);
    const resultingObject: resObj = this.formatResult(queryRes);
    return resultingObject;
  }

  formatResult(query: QueryResult<selectQueryResult>): resObj {
    var results: resObj = {
      Results: [],
    };
    query.rows.forEach((elem) => {
      let res: listUser;
      res.user_firstname = elem.first_name;
      res.user_lastname = elem.last_name;
      res.user_email = elem.email;
      res.user_phone = elem.phone;
      res.appartment_name = elem.name;
      res.appartment_adress = elem.address + ' ' + elem.address2;
      res.appartment_zip_code = elem.zip_code;
      res.appartment_city = elem.city;
      res.appartment_country = elem.country;
      res.booking_start_date = new Date(elem.starts_at);
      let end_date: Date = res.booking_start_date;
      end_date.setDate(end_date.getDate() + elem.booked_for);
      res.booking_end_date = end_date;
      res.confirmed = elem.confirmed;
      results.Results.push(res);
    });
    return results;
  }
}
/*
Query: 
SELECT
    us.first_name,
    us.last_name,
    us.email,
    us.phone,
    ap.name,
    ap.address,
    ap.address2,
    ap.zip_code,
    ap.city,
    ap.country,
    bk.starts_at,
    bk.booked_for,
    bk.confirmed
FROM bookings AS bk
LEFT JOIN appartments AS ap
ON ap.id = bk.apartment_id
LEFT JOIN users AS us
ON us.id = bk.user_id
LIMIT 10; 
*/
