import './user-list.css';
import { UserService } from "../services/user.service";

export class UserList extends HTMLElement {
  constructor() {
    super();
    
    this.userService = new UserService();
    this.addEventListener('render', e => this._render());
    this._render();
  }

  async _render() {
    const users = await this.userService.getAll();

    this.innerHTML = `
      ${users.reduce((acc, user) => {
        return acc + `
          <div class="card">
            <div class="card-title">${user.name}</div>
            <div class="card-body">
              <p><small>E-email: </small>${user.email}</p>
              <p><small>CPF: </small>${user.cpf}</p>
              <p><small>Phone: </small>${user.phone}</p>
            </div>
            <div class="btn-group">
              <app-user-edit-button data-key="${user.email}"></app-user-edit-button>
              <app-user-delete-button data-key="${user.email}"></app-user-delete-button>
            </div>
          </div>
        `;
      }, '')}
    `;
  }
}
