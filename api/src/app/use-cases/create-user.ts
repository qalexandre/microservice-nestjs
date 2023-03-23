import { Email } from '@app/entities/email';
import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface CreateUserRequest {
  name: string;
  email: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { email, name } = request;

    const user = new User({
      email: new Email(email),
      name,
    });

    await this.usersRepository.create(user);

    return { user };
  }
}
