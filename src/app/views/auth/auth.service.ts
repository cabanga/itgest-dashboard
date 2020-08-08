import { Injectable, EventEmitter } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from './../../../environments/environment';
import { ApplicationService } from './../../api/application.service';


import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    showLayoutEmitter = new EventEmitter<boolean>()
    private userLogged = false
    private headers = new HttpHeaders()
                        .set('content-type', 'application/json')
                        .set('Access-Control-Allow-Origin', '*');

    constructor(
        private router: Router,
        private _http_client: HttpClient,
        private _applicationService: ApplicationService

        ) { }

    signInService(user: any){
        this._http_client.post<any>(`${environment.baseURL}/api/v1/auth/login`, user, { 'headers': this.headers })
        .subscribe(
            response => {
                sessionStorage.setItem('sessionToken', response.token);
                this.userLogged = true
                this.showLayoutEmitter.emit(true)
                this.router.navigate(['/dashboard'])
                this._applicationService.SwalSucess('Sessão iniciada com sucesso')
            },
            (error) => {
                if (!error.ok) {
                    this.userLogged = false
                    this.showLayoutEmitter.emit(false)

                    this._applicationService.SwalDanger('Senha ou e-mail invalido')
                    this.router.navigate(['/auth/login'])
                }
            }
        )
    }




    removeTokenOfUser(){
        sessionStorage.removeItem('sessionToken')
        this.userLogged = false
        this.showLayoutEmitter.emit(false)
        this.router.navigate(['/auth/login'])
    }
}