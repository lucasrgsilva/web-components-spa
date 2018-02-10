import './user-create.css';
import { customRules } from './custom-rules';
import { UserService } from '../services/user.service';
import { Router } from '../../core/router';

export class UserCreate extends HTMLElement {
  constructor() {
    super();

    this.user = {};
    this.userService = new UserService();
    this.router = new Router();

    this._render();
    this._handleFormValidation();
    this._handleSubmit();
  }

  _enableSubmit() {
    try {
      this.querySelectorAll('input').forEach(el => {
        if (this._validateField(el).isInvalid) {
          throw "Form invalid";
        }
      });
      createUser.submitButton.disabled = false;
    } catch (err) {
      createUser.submitButton.disabled = true;
    }
  };

  _handleFormValidation() {
    this.querySelectorAll('input').forEach(el => {
      el.addEventListener('input', evt => {
        this._onChange(evt);
      });
    });
  }

  _handleSubmit() {
    createUser.submitButton.addEventListener('click', evt => {
      evt.preventDefault();
      this._onCreateUser();
    });
  }

  _onChange(evt) {
    this.user[evt.target.name] = evt.target.value;
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

  async _onCreateUser() {
    await this.userService.save(this.user);
    setTimeout(() => this.router.navigate('/lista'), 500);
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
        <div class="form-group">
          <input name="name" class="form-control" required>
          <span class="bar"></span>
          <span class="alert-error"></span>
          <label for="name">Name completo</label>
        </div>
        <div class="form-group">
          <input name="email" class="form-control" required>
          <span class="bar"></span>
          <span class="alert-error"></span>
          <label for="email">E-mail</label>
        </div>
        <div class="form-group">
          <input name="cpf" class="form-control" required>
          <span class="bar"></span>
          <span class="alert-error"></span>
          <label for="cpf">CPF</label>
        </div>
        <div class="form-group">
          <input name="phone" class="form-control" required>
          <span class="bar"></span>
          <span class="alert-error"></span>
          <label for="phone">Telefone</label>
        </div>
        <button type="button" name="submitButton" class="big-button" disabled>Cadastrar</button>
      </form>
    `;
  }
}
