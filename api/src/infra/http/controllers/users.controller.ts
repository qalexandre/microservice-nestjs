import { CreateUser } from '@app/use-cases/create-user';
import { UserViewModel } from '@infra/view-models/user-view-model';
import { Body, Controller, Post } from '@nestjs/common';
import { Client, ClientKafka } from '@nestjs/microservices';
import { microserviceConfig } from 'src/config/microserviceConfig';
import { CreateUserBody } from '../dtos/create-user-body';

@Controller('users')
export class UserController {
  constructor(private createUser: CreateUser) {}

  @Client(microserviceConfig)
  client: ClientKafka;

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { email, name } = body;

    const { user } = await this.createUser.execute({
      email,
      name,
    });

    this.client.emit('notification', {
      recipientId: user.id,
      content: 'Bem vindo ao sistema ' + user.name,
      category: 'welcome',
    });

    return { user: UserViewModel.toHTTP(user) };
  }
}
