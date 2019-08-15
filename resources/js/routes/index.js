import Index from '../components/IndexComponent';
import UserAccount from '../components/UserAccountComponent';
import Dashboard from '../components/dashboard/DashboardComponent';
import Menu from '../components/menu/MenuComponents';

const routes = [
    {path: '/', component: Index, props: true},
    {path: '/admin', component: UserAccount, props: true},
    {path: '/admin/dashboard', component: Dashboard, props: true},
    {path: '/admin/menu', component: Menu, props: true}
];

export default routes;
