import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService : AuthenticationService, public routes : Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }

  forgotPassword(){
    this.routes.navigate(['forgot-password']);
  }
}
