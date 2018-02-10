import './user-create.css';
import { customRules } from './custom-rules';

export class UserCreate extends HTMLElement {
  constructor() {
    super();

    this.userState = {};

    this._render();
    this._handleFormValidation();
  }

  _enableSubmit() {
    try {
      this.querySelectorAll('input').forEach(el => {
        if (this._validateField(el).isInvalid) {
          throw "Form invalid";
        }
        createUser.submitButton.disabled = false;
      });
    } catch (err) {
      createUser.submitButton.disabled = true;
    }
  };

  _onChange(evt) {
    this.userState[evt.target.name] = evt.target.value;
    const el = this._validateField(evt.target);

    if (el.isInvalid) {
      evt.target.parentNode.classList.add('invalid');
      evt.target.parentNode.querySelector('.alert-error').innerHTML = el.message;
    } else {
      evt.target.parentNode.classList.remove('invalid');
      evt.target.parentNode.querySelector('.alert-error').innerHTML = '';
    }

    this._enableSubmit();
  }

  _handleFormValidation() {
    this.querySelectorAll('input').forEach(el => {
      el.addEventListener('input', evt => {
        this._onChange(evt);
      });
    });
  }

  _validateField(e) {
    if (e.validity.valueMissing) {
      return {
        isInvalid: true,
        message: 'Campo obrigatório'
      };
    }

    if (customRules[e.name]) {
      return customRules[e.name](e.value);
    }

    return {};
  }

  _render() {
    this.innerHTML = `
      <form name="createUser" class="form">
        <div class="form-group validate-name">
          <app-user-input></app-user-input>
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
        <button name="submitButton" class="big-button" disabled>Cadastrar</button>
      </form>
    `;
  }
}
