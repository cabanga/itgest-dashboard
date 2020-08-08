import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

/*
const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: '', component: UsersComponent }
];

*/

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        data: { title: 'Utilizadores' },
        children: [
            {
                path: '',
                redirectTo: 'users'
            },
            {
                path: 'register',
                component: UserFormComponent,
                data: {
                    title: 'Registar utilizador'
                }
            }

        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule { }