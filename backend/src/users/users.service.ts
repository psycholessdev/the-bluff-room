import { Injectable } from '@nestjs/common';

export type User = {
  userId: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: '1',
      username: 'Lynn',
      password: '123',
    },
    {
      userId: '2',
      username: 'Camila',
      password: '1234',
    },
  ];

  async findByUserName(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
