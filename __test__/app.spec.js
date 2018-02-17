import { UserService } from '../src/app/user/services/user.service';
import { Navbar } from '../src/app/navbar/navbar';
jest.mock('../src/app/navbar/navbar');

describe('UserService', () => {

  beforeEach(() => {
    Navbar.mockClear();
  });

  it('Should return same instance', () => {
    expect(new UserService()).toBe(new UserService());
  });

  it('Should instantiate Navbar', () => {
    const navBar = new Navbar();

    expect(Navbar).toHaveBeenCalled();
  })
});