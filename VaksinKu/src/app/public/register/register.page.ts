import { LoadingService } from './../../loading-example/loading.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = ""
  password: string = ""
  cpassword: string = ""

  constructor(public afAuth: AngularFireAuth, private routes: Router, private loading: LoadingService) { }

  ngOnInit() {
  }

  async register() {
    const { email, password, cpassword } = this
    if (password !== cpassword) {
      return console.error("Password Doesn't Match")
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      this.loading.registerLoading();
      this.routes.navigate(['login']);
    } catch (error) {
      console.dir(error)
    }
  }

}
