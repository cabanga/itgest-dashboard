import { ApplicationService } from './../../api/application.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {


    users: any = []

    user: any = {
        name: null,
        email: null,
        password: null,
        role: 0,
    }

    constructor(
        private _applicationService: ApplicationService
    ) { }

    ngOnInit(): void {
        this._applicationService.getUsres()
        .subscribe(response => {
            this.users = response
        })
    }

}
