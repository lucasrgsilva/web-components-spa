import './app.css';
import * as providers from './core/define-elements';
import { Router } from "./core/router";

export class App {
  constructor() {
    this.router = new Router();
    this.app = document.createElement('div');
    document.querySelector('body').appendChild(this.app);
  }

  render() {
    const route = this.router.route;
    
    if (route) {
      this.app.innerHTML = `
        <app-navbar></app-navbar>
        <div class="container">
          <${route.component}></${route.component}>
        </div>
      `;
    } else {
      this.router.navigate('/cadastro');
    }
  }
}