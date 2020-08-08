import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})


export class LoginComponent implements OnInit {

  user: any = {
    email: null,
    password: null
  }

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  SignIn(){
      this.authService.signInService(this.user)
  }

}
