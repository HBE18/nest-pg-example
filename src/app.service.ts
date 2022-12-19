import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  checkConnection(): { status: string } {
    return { status: 'Connection Succeded' };
  }
}
