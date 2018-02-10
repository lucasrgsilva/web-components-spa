import { Navbar } from '../navbar/navbar';
import { UserCreate } from '../user/user-create/user-create';
import { UserList } from '../user/user-list/user-list';
import { UserCard } from '../user/user-card/user-card';
import { UserDeleteButton } from '../user/user-card/buttons/user-delete';
import { UserEditButton } from '../user/user-card/buttons/user-edit';

customElements.define('app-navbar', Navbar);
customElements.define('app-user-create', UserCreate);
customElements.define('app-user-list', UserList);
customElements.define('app-user-card', UserCard);
customElements.define('app-user-delete-button', UserDeleteButton);
customElements.define('app-user-edit-button', UserEditButton);

export default { };


