import { UserService } from "../services/user.service";

export class UserList extends HTMLElement {
  constructor() {
    super();
    this.userService = new UserService();
    this._render();
  }

  async _render() {
    const users = await this.userService.getAll();

    this.innerHTML = `
      ${users.reduce((acc, cur) => {
        return acc + `<app-user-card data-user='${JSON.stringify(cur)}'></app-user-card>`;
      }, '')}
    `;
  }
}
