const routes = [
    {name: 'Login', path: '/', component: () => import('../components/IndexComponent'), props: true},
    {name: 'Admin', path: '/admin', component: () => import('../components/UserAccountComponent'), props: true},
    {name: 'Dashboard', path: '/admin/dashboard', component: () => import('../components/dashboard/DashboardComponent'), props: true},
    {
      //  name: 'Users',
      //  name: 'Users',
        path: '/admin/users/:user_id', component: () => import('../components/user/UserComponent'), props: true,
        children: [
            {
               // name: 'Users',
                path: '', component: () => import('../components/user/UserEditComponent'), props: true
            }
        ]
    },
    {name: 'Setting', path: '/admin/setting', component: () => import('../components/setting/SettingComponent'), props: true},
    {name: 'Menu', path: '/admin/menu', component: () => import('../components/setting/menu/MenuComponents'), props: true},
    {name: 'Page', path: '/admin/page', component: () => import('../components/page/PageComponent'), props: true},
    {name: 'System', path: '/admin/system', component: () => import('../components/setting/SystemComponent'), props: true},
    {name: 'Permission', path: '/admin/permission', component: () => import('../components/setting/PermissionComponent'), props: true},
    {name: 'Smtp', path: '/admin/smtp', component: () => import('../components/setting/SmtpComponent'), props: true},
    {name: 'Imap', path: '/admin/imap', component: () => import('../components/setting/ImapComponent'), props: true},
    {name: 'Mail', path: '/admin/mail', component: () => import('../components/setting/MailComponent'), props: true},
];

export default routes;

//{name:'Users',path: '/admin/user/:user_id', component: () => import('../components/user/UserEditComponent'), props: true},
