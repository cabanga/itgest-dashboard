import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { UsersRoutingModule } from './users-routing.module'
import { UsersComponent } from './users.component'
import { UserFormComponent } from './user-form/user-form.component'
import { UserListComponent } from './user-list/user-list.component'

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    UsersRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserListComponent
  ]
})
export class UsersModule {}
