import './navbar.css';
import { Router } from "../router";

export class Navbar extends HTMLElement {
  constructor() {
    super();

    this.router = new Router();
    this.innerHTML = `
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
    this.setActiveRoute(this.router.url);
  }

  setActiveRoute(url) {
    this.querySelectorAll('nav.navbar > ul > li > a').forEach(a => {
      a.hash.slice(1) === url ? a.classList.add('active') : a.classList.remove('active');
    });
  }
}
