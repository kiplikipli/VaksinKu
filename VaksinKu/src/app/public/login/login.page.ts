import { AlertService } from './../../services/alert.service';
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
    public http: HttpClient,
    private alert: AlertService
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
      this.authService.login()
      this.loading.presentLoadingWithOptions();
    }
    catch (err) {
      console.dir(err)
      /*if (err.code === "auth/invalid-email") {
        this.alert.presentAlertInvalidEmail();
      } else if (err.code === "auth/wrong-password") {
        this.alert.presentAlertWrongPassword();
      } else if (err.code === "auth/user-not-found") {

      }*/
      this.alert.presentAlert(err.code);
    }

  }

  goRegister() {
    this.routes.navigate(['register']);
  }

  forgotPassword() {
    this.routes.navigate(['forgot-password']);
  }
}
