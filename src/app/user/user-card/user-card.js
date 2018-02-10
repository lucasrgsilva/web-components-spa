import './user-card.css';

export class UserCard extends HTMLElement {
  constructor() {
    super();
  }

  attributeChangedCallback(name, oldV, newV) {
    this._user = JSON.parse(newV);
    this._render();
  }

  static get observedAttributes() {
    return ['data-user'];
  }

  get user() {
    return this._user;
  }

  set user(user) {
    this.setAttribute('data-user', JSON.stringify(user));
  }

  _render() {
    this.innerHTML = `
      <div class="card">
        <div class="card-title">${this.user.name}</div>
        <div class="card-body">
          <Edit>
          <p><small>E-email: </small>${this.user.email}</p>
          <p><small>CPF: </small>${this.user.cpf}</p>
          <p><small>Phone: </small>${this.user.phone}</p>
        </div>
        <div class="btn-group">
          <button class="btn btn-primary">Editar</button>
          <app-user-delete-button data-key="${this.user.email}"></app-user-delete-button>
        </div>
      </div>
    `;
  }
}