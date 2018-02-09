import { Navbar } from '../navbar/navbar';
import { UserCreate } from '../user/user-create/user-create';
import { UserList } from '../user/user-list/user-list';
import { UserCard } from '../user/user-card/user-card';

customElements.define('app-navbar', Navbar);
customElements.define('app-user-create', UserCreate);
customElements.define('app-user-list', UserList);
customElements.define('app-user-card', UserCard);

export default { };


