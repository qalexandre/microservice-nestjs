import { CreateUser } from '@app/use-cases/create-user';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './controllers/users.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUser],
})
export class HttpModule {}
