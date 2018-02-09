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
    const path = this.router.path;
    
    if (path) {
      this.app.innerHTML = `
        <app-navbar></app-navbar>
        <div class="container">
          <${path.component}></${path.component}>
        </div>
      `;
    } else {
      this.router.navigate('/cadastro');
    }
  }
}