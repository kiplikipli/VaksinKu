import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { profile, ProfileService } from '../../services/profile.service'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-umum',
  templateUrl: './umum.page.html',
  styleUrls: ['./umum.page.scss'],
})
export class UmumPage implements OnInit {
  image: any;
  profile: AngularFirestoreDocument
  sub
  name: string = ""
  email: string = ""
  address: string = ""
  phone: string = ""
  baseURL: string = "https://ucarecdn.com/"

  constructor(
    private authService: AuthenticationService,
    public routes: Router,
    public afStore: AngularFirestore,
    public profileService: ProfileService,
    public user: UserService,
    public afAuth: AngularFireAuth,
    public toastCtrl: ToastController
  ) {
    this.profile = afStore.doc(`users/${user.getUID()}`)
    this.sub = this.profile.valueChanges().subscribe(profile => {
      this.name = profile.name
      this.email = profile.email
      this.address = profile.address
      this.phone = profile.phone
      this.image = profile.image
    })
  }


  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.afAuth.auth.signOut();
    this.routes.navigate(['tabs']);
    this.showToast('You have been logged out!');
  }

  changeProfilePicture() {
    this.routes.navigate(['members', 'uploader']);
  }

  goEdit() {
    this.routes.navigate(['members', 'edit-profile'])
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 1500
    }).then(toast => toast.present());
  }

}
