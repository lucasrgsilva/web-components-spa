import { App } from './app/app';

const app = new App();

window.addEventListener('hashchange', () => app.render());
window.addEventListener('load', () => app.render());
