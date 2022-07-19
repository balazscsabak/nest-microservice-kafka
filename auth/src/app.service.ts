import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly user = [
    {
      userid: '123',
      stripeId: 'STRIPE-1234124',
    },
    {
      userid: '456',
      stripeId: 'STRIPE-4215243',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.user.find((user) => getUserRequest.userId === user.userid);
  }
}
