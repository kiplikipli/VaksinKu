import { UserService } from './../../services/user.service';
import { AlertService } from './../../services/alert.service';
import { LoadingService } from './../../loading-example/loading.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string = ""
  email: string = ""
  phone: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    private routes: Router,
    private loading: LoadingService,
    private alert: AlertService,
    public afStore: AngularFirestore,
    public user: UserService
  ) { }

  ngOnInit() {
  }

  async register() {
    const { name, email, phone, password, cpassword } = this
    if (password !== cpassword) {
      return this.alert.presentAlert('password-doesnt-match');
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      this.loading.registerLoading();
      this.routes.navigate(['login']);

      this.afStore.doc(`users/${res.user.uid}`).set({
        name,
        email,
        phone,
      })

      this.user.setUser({
        name,
        email,
        phone,
        uid: res.user.uid
      })

    } catch (error) {
      this.alert.presentAlert(error.code);
    }
  }

}
