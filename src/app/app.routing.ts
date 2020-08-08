import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './guards/auth.guard';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UsersComponent } from './views/users/users.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: '404', component: P404Component,
        data: { title: 'Page 404' }
    },
    {
        path: '500', component: P500Component,
        data: { title: 'Page 500' }
    },
    {
        path: 'auth/login', component: LoginComponent,
        data: { title: 'Login Page' }
    },
    {
        path: 'register', component: RegisterComponent,
        data: { title: 'Register Page'}
    },
    {
        path: '',  component: DefaultLayoutComponent,
        canActivate: [AuthGuard],
        data: {
        title: 'Home'
        },
        children: [

            {
                path: 'dashboard',
                loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
            },

        ]
    },
    { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
