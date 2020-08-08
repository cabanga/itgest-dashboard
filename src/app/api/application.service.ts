import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import Swal  from 'sweetalert2'
//import * as $ from 'jquery'

@Injectable({
    providedIn: 'root'
})

export class ApplicationService {
    private token = sessionStorage.getItem('sessionToken')

    private headers = new HttpHeaders()
                        .set('content-type', 'application/json')
                        .set('Access-Control-Allow-Origin', '*')
                        .set('Authorization', `Bearer ${this.token}`)


    constructor(
        private _http_client: HttpClient,
    ) {}


    // ===========================================================================================
    // ===========================================================================================


    createUser(user: any) {
        return this._http_client.post<any>(`${environment.baseURL}/api/v1/auth/register`, user, { 'headers': this.headers })
    }

    getUsres() {
        return   this._http_client.get<any>(`${environment.baseURL}/api/v1/users`, { 'headers': this.headers })
    }  
    

    removeModal(){
        //$('.main-modal-p3').remove()
        //$('.modal-backdrop').remove()
    }

    SwalSucess(title){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 1500
        })
    }

    SwalDanger(title: string){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: title,
            showConfirmButton: false,
            timer: 1500
        })
    }



}