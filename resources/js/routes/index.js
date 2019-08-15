import Index from '../components/IndexComponent';
import UserAccount from '../components/UserAccountComponent';

const routes = [
    {path: '/', component: Index, props: true},
    {path: '/admin', component: UserAccount, props: true},
];

export default routes;
