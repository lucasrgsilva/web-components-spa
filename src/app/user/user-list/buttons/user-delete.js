import { UserService } from "../../services/user.service";

export class UserDeleteButton extends HTMLElement {
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

  async _onDeleteUser() {
    await this.userService.delete(this.key);

    const event = new Event('render');
    document.querySelector('app-user-list').dispatchEvent(event);
  }

  _render() {
    const button = document.createElement('button');

    button.className = 'btn btn-danger';
    button.innerText = 'Excluir';
    button.addEventListener('click', () => {
      this._onDeleteUser();
    });

    this.appendChild(button);
  }
}