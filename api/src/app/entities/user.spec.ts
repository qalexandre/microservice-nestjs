import { Email } from './email';
import { User } from './user';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      email: new Email('teste@teste.com'),
      name: 'Teste',
    });

    expect(user).toBeTruthy();
  });
});
