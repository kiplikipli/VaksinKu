import { UserService } from 'src/app/services/user.service';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  mainuser: AngularFirestoreDocument
  sub
  name: string
  address: string
  phone: string
  email: string
  busy: boolean = false

  constructor(
    private http: Http,
    private afs: AngularFirestore,
    private route: Router,
    private alert: AlertController,
    private user: UserService
  ) {
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(profile => {
      this.name = profile.name
      this.address = profile.address
      this.phone = profile.phone
      this.email = profile.email
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  async showAlert(title: string, content: string) {
    const alert = await this.alert.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  async updateDetails() {
    this.busy = true

    if (this.email !== this.user.getEmail()) {
      await this.user.updateEmail(this.email)
      this.mainuser.update({
        email: this.email
      })
    }

    if (this.name !== this.user.getNama()) {
      await this.user.updateNama(this.name)
      this.mainuser.update({
        name: this.name
      })
    }

    if (this.address !== this.user.getAlamat()) {
      await this.user.updateAlamat(this.address)
      this.mainuser.update({
        address: this.address
      })
    }

    if (this.phone !== this.user.getNo_hp()) {
      await this.user.updateNo_hp(this.phone)
      this.mainuser.update({
        phone: this.phone
      })
    }
    this.busy = false

    await this.showAlert('Done!', 'Your profile was updated!')
    this.route.navigate(['tabs', 'tabs', 'profile'])
  }
}