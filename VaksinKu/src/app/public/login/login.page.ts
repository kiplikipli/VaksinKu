import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './../../loading-example/loading.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

const API_URL = environment.apiVaksinku;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""

  constructor(
    private authService: AuthenticationService,
    public routes: Router,
    private loading: LoadingService,
    public afAuth: AngularFireAuth,
    public http: HttpClient
  ) {
    this.testApi();
  }

  testApi() {
    this.http.get(`${API_URL}/`).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  async login() {
    const { email, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)
    }
    catch (err) {
      console.dir(err)
    }
    this.authService.login()
    this.loading.presentLoadingWithOptions();
  }

  goRegister() {
    this.routes.navigate(['register']);
  }

  forgotPassword() {
    this.routes.navigate(['forgot-password']);
  }
}
