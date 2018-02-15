import { UserService } from '../src/app/user/services/user.service';
import { Navbar } from '../src/app/navbar/navbar';

describe('UserService', () => {
  it('Should return same instance', () => {
    expect(new UserService()).toBe(new UserService());
  });
});