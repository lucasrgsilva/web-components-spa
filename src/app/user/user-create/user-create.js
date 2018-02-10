import './user-create.css';

export class UserCreate extends HTMLElement {
  constructor() {
    super();
    this._render();
  }

  _render() {
    this.innerHTML = `
      <form name="createUser" class="form">
        <div class="form-group validate-name">
          <input name="name" class="form-control" required>
          <span class="bar"></span>
          <span class="alert-error"></span>
          <label for="name">Name completo</label>
        </div>
        <div class="form-group validate-email">
          <input name="email" class="form-control" required>
          <span class="bar"></span>
          <span class="alert-error"></span>
          <label for="email">E-mail</label>
        </div>
        <div class="form-group validate-cpf">
          <input name="cpf" class="form-control" required>
          <span class="bar"></span>
          <span class="alert-error"></span>
          <label for="cpf">CPF</label>
        </div>
        <div class="form-group validate-phone">
          <input name="phone" class="form-control" required>
          <span class="bar"></span>
          <span class="alert-error"></span>
          <label for="phone">Telefone</label>
        </div>
        <button class="big-button" disabled>Cadastrar</button>
      </form>
    `;
  }
}
