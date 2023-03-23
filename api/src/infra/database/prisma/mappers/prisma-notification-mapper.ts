import { User } from '@app/entities/user';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      email: user.email.value,
      name: user.name,
      createdAt: user.createdAt,
    };
  }
}
