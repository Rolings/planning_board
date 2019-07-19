import Index from '../components/IndexComponent'
import Account from '../components/UserAccountComponent'

const routes = [
    {path: '/', component: Index, props: true},
    {path: '/account', component: Account, props: true}
];

export default routes;
