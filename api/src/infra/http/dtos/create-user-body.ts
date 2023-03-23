import { IsNotEmpty, IsUUID, IsEmail } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
