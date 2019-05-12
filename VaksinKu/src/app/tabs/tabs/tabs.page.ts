import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AlertService } from './../../services/alert.service';
import { AuthGuardService } from './../../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  mainuser: AngularFirestoreDocument
  sub
  role: string;
  constructor(
    private authGuard: AuthGuardService,
    private routes: Router,
    private alert: AlertService,
    public users: UserService,
    private afs: AngularFirestore,
  ) {
    this.mainuser = afs.doc(`users/${users.getUID()}`)
  }

  ngOnInit() {
    this.sub = this.mainuser.valueChanges().subscribe(profile => {
      this.role = profile.role
    })
  }

  verifAuth() {
    if (this.authGuard.canActivate() === false) {
      this.alert.presentAlert('not-login-yet');
      this.routes.navigate(['login']);
    }
  }
}
