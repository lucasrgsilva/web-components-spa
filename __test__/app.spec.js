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


    const navBarMock = document.createElement('div')
    
    navBarMock.innerHTML = `
      <nav class="navbar">
        <ul class="nav-content">
          <li class="nav-item">
            <a href="#/cadastro">Cadastro</a>
          </li>
          <li class="nav-item">
            <a href="#/lista">Lista</a>
          </li>
        </ul>
      </nav>
    `;

    expect(Navbar).toHaveBeenCalled();

    expect(navBar).toEqual(navBarMock)
  })
});