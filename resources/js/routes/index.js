const components = {
    IndexComponent: () => import('../components/IndexComponent'),
    UserAccountComponent: () => import('../components/UserAccountComponent'),
    DashboardComponent: () => import('../components/dashboard/DashboardComponent'),
    UserComponent: () => import('../components/user/UserComponent'),
    UserEditComponent: () => import('../components/user/UserEditComponent'),
    SettingComponent: () => import('../components/setting/SettingComponent'),
    MenuComponents: () => import('../components/setting/menu/MenuComponents'),
    PageComponent: () => import('../components/page/PageComponent'),
    SystemComponent: () => import('../components/setting/SystemComponent'),
    PermissionComponent: () => import('../components/setting/PermissionComponent'),
    SmtpComponent: () => import('../components/setting/SmtpComponent'),
    ImapComponent: () => import('../components/setting/ImapComponent'),
    MailComponent: () => import('../components/setting/MailComponent')

};


const routes = [
    {name: 'Login', path: '/', component: components.IndexComponent, props: {path: '/', component: components.IndexComponent}},
    {name: 'Admin', path: '/admin', component: components.UserAccountComponent, props: {path: '/admin', component: components.UserAccountComponent}},
    {name: 'Dashboard', path: '/admin/dashboard', component: components.DashboardComponent, props: {path: '/admin/dashboard', component: components.DashboardComponent}},
    {
        path: '/admin/user/:user_id', component: components.UserComponent, props: {path: '/admin/user', component: components.UserComponent},
        children: [
            {name: 'Users', path: '', component: components.UserEditComponent, props: {path: '', component: components.UserEditComponent}}
        ]
    },
    {name: 'Setting', path: '/admin/setting', component: components.SettingComponent, props: {path: '/admin/setting', component: components.SettingComponent}},
    {name: 'Menu', path: '/admin/menus', component: components.MenuComponents, props: {path: '/admin/menus', component: components.MenuComponents}},
    {name: 'Page', path: '/admin/page', component: components.PageComponent, props: {path: '/admin/page', component: components.PageComponent}},
    {name: 'System', path: '/admin/system', component: components.SystemComponent, props: {path: '/admin/system', component: components.SystemComponent}},
    {name: 'Permission', path: '/admin/permission', component: components.PermissionComponent, props: {path: '/admin/permission', component: components.PermissionComponent}},
    {name: 'Smtp', path: '/admin/smtp', component: components.SmtpComponent, props: {path: '/admin/smtp', component: components.SmtpComponent}},
    {name: 'Imap', path: '/admin/imap', component: components.ImapComponent, props: {path: '/admin/imap', component: components.ImapComponent}},
    {name: 'Mail', path: '/admin/mail', component: components.MailComponent, props: {path: '/admin/mail', component: components.MailComponent}}
];

export default routes;

//
