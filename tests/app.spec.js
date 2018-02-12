import { expect } from 'chai';
import { UserService } from '../src/app/user/services/user.service';

describe('UserService', () => {
  it('Should return same instance', () => {
    expect(new UserService()).to.equal(new UserService());
  });
});