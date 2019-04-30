import { ToastController } from '@ionic/angular';
import { UserService } from './../../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.page.html',
  styleUrls: ['./uploader.page.scss'],
})
export class UploaderPage implements OnInit {

  imageURL: string;

  constructor(
    public http: Http,
    public routes: Router,
    public afStore: AngularFirestore,
    public user: UserService,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  confirmPicture() {
    const image = this.imageURL

    this.afStore.doc(`users/${this.user.getUID()}`).update({
      image
    })
    this.showToast('Image has been uploaded successfully');
    this.routes.navigate(['members', 'uploader']);
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  fileChanged(event) {
    const files = event.target.files
    console.log(files)

    const data = new FormData()
    data.append('file', files[0])
    data.append('UPLOADCARE_STORE', '1')
    data.append('UPLOADCARE_PUB_KEY', '926bb4c0a14abcfb84df')

    this.http.post('https://upload.uploadcare.com/base/', data)
      .subscribe(event => {
        console.log(event)
        this.imageURL = event.json().file
      })
  }
}
