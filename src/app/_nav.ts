import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
    },

    {
        name: 'Utilizadores',
        url: '/users',
        icon: 'icon-drop'
    },
    {
        name: 'Outros',
        url: '/',
        icon: 'icon-pencil'
    },

    {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
            {
                name: 'Buttons',
                url: '/',
                icon: 'icon-cursor'
            },
            {
                name: 'Dropdowns',
                url: '/',
                icon: 'icon-cursor'
            }
        ]
    },



    {
        divider: true
    }

];
