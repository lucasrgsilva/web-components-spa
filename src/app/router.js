export class Router {
  constructor() {
    this.routes = [
      { path: '/cadastro', component: 'app-user-create' },
      { path: '/lista', component: 'app-user-list' }
    ]
  }

  get path() {
    return this.routes.find(url => url.path === this.url);
  }

  get url() {
    return location.hash.slice(1);
  }

  navigate(path) {
    location.hash = path;
  }
}
