import { Navbar } from '../navbar/navbar';
import { UserCreate } from '../user/user-create/user-create';
import { UserList } from '../user/user-list/user-list';
import { UserDeleteButton } from '../user/user-list/buttons/user-delete';
import { UserEditButton } from '../user/user-list/buttons/user-edit';

customElements.define('app-navbar', Navbar);
customElements.define('app-user-create', UserCreate);
customElements.define('app-user-list', UserList);
customElements.define('app-user-delete-button', UserDeleteButton);
customElements.define('app-user-edit-button', UserEditButton);

export default { };


