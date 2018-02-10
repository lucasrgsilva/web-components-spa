import { UserService } from "../../services/user.service";

export class UserEditButton extends HTMLElement {
  constructor() {
    super();
    this.userService = new UserService();
  }

  attributeChangedCallback(name, oldV, newV) {
    this._key = newV;
    this._render();
  }

  static get observedAttributes() {
    return ['data-key'];
  }

  get key() {
    return this._key;
  }

  set key(key) {
    this.setAttribute('data-key', key);
  }

  _onEditUser() {
    
  }

  _render() {
    const button = document.createElement('button');

    button.className = 'btn btn-primary';
    button.innerText = 'Editar';
    button.addEventListener('click', () => {
      this._onEditUser();
    });

    this.appendChild(button);
  }
}