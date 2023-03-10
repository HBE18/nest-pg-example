export interface usersBase {
  user_firstname: string;
  user_lastname: string;
  user_email: string;
  user_phone: string;
}

export interface appartmentsBase {
  appartment_name: string;
  appartment_adress: string;
  appartment_zip_code: string;
  appartment_city: string;
  appartment_country: string;
}

export interface listUser extends usersBase, appartmentsBase {
  booking_start_date: Date;
  booking_end_date: Date;
  confirmed: number;
}

export interface selectQueryResult {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  name: string;
  address: string;
  address2: string;
  zip_code: string;
  city: string;
  country: string;
  starts_at: string;
  booked_for: number;
  confirmed: number;
}

export interface createBooking {
  id: number;
  user_id: number;
  starts_at: string;
  booked_at: string;
  booked_for: number;
  apartment_id: number;
  confirmed: number;
}

export interface updateBooking extends Partial<createBooking> {}

export interface filterParams {
  user_firstname?: string;
  user_lastname?: string;
  booking_startsat?: string;
  appartment_name?: string;
  confirmed?: number;
}

export type resObj = {
  Results: listUser[];
};

export type filterParam = {
  params: any[];
  values: any[];
};

export type tparam = {
  limit: number;
  page: number;
  filterParams: filterParam;
};