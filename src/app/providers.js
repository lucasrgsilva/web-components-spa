import { Navbar } from './navbar/navbar';
import { UserCreate } from './user/user-create';
import { UserList } from './user/user-list';

customElements.define('app-navbar', Navbar);
customElements.define('app-user-create', UserCreate);
customElements.define('app-user-list', UserList);

export default { };


