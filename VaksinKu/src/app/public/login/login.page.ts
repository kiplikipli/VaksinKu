import { UserService } from './../../services/user.service';
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

  name: string = ""
  email: string = ""
  address: string = ""
  phone: string = ""
  password: string = ""
  role: string = ""

  constructor(
    private authService: AuthenticationService,
    public routes: Router,
    private loading: LoadingService,
    public afAuth: AngularFireAuth,
    public http: HttpClient,
    private alert: AlertService,
    public user: UserService
  ) {

  }

  ngOnInit() {
  }

  async login() {
    const { name, email, address, phone, role, password } = this
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password)

      if (res.user) {
        this.user.setUser({
          name,
          email,
          address,
          phone,
          role,
          uid: res.user.uid
        })
        this.authService.login()
        this.loading.presentLoadingWithOptions();
      }
    }
    catch (err) {
      console.dir(err)
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
