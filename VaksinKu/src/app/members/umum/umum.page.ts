
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
  phone: string = ""
  baseURL: string = "https://ucarecdn.com/"

  constructor(
    private authService: AuthenticationService,
    public routes: Router,
    public afStore: AngularFirestore,
    public profileService: ProfileService,
    public user: UserService
  ) {
    this.profile = afStore.doc(`users/${user.getUID()}`)
    this.sub = this.profile.valueChanges().subscribe(profile => {
      this.name = profile.name
      this.email = profile.email
      this.phone = profile.phone
      this.image = profile.image
    })
  }


  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.routes.navigate(['tabs']);
  }

  changeProfilePicture() {
    this.routes.navigate(['members', 'uploader']);
  }

  goEdit() {
    this.routes.navigate(['edit-profile'])
  }
}
