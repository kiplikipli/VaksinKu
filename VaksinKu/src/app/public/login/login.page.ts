import { LoadingService } from './../../loading-example/loading.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService : AuthenticationService, 
    public routes : Router, 
    private loading : LoadingService
    ) { }

  ngOnInit() {
  }

  login(){
    this.authService.login()
    this.loading.presentLoadingWithOptions();
  }

  goRegister(){
    this.routes.navigate(['register']);
  }

  forgotPassword(){
    this.routes.navigate(['forgot-password']);
  }
}
