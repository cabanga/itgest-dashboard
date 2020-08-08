import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { ApplicationService } from './../../../api/application.service';


@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
    loadingSpinner: boolean
    @Input() user: any
    @Input() isNew: boolean

    constructor(
        private router: Router,
        private _applicationService: ApplicationService
    ) { }

    ngOnInit(): void {
    }

    _saveUser(){
        this.loadingSpinner = true

        this._applicationService.createUser( this.user )
        .subscribe( response => {
            this._applicationService.SwalSucess('Utilizador registado com sucesso')

            console.log( response )
            //this.router.navigate(['/stores/details', response.id])
            this._applicationService.removeModal()
        }),
        (error) => {
            if (!error.ok) {
                this.loadingSpinner = false
                this._applicationService.SwalDanger(error.error)
            }
        }
    }

    _updateUser(){
        this.loadingSpinner = true

        //this._applicationService.UpdateStore( this.store.id, this.store )
        //.subscribe( response => {
        //    console.log( response )
        //    this._applicationService.SwalSucess('Loja actualizada com sucesso')
        //    this.router.navigate(['/stores'])
        //    this._applicationService.removeModal()
        //}),
        //(error) => {
        //    console.log( error.error )
        //    if (!error.ok) {
        //        this.loadingSpinner = false
        //        this._applicationService.SwalDanger(error.error)
        //    }
        //}
    }


}
