import { Router } from '@angular/router';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-data-anak',
  templateUrl: './data-anak.page.html',
  styleUrls: ['./data-anak.page.scss'],
})
export class DataAnakPage implements OnInit {

  sons: AngularFirestoreDocument
  sudah: string = 'Sudah';
  sonsData
  status: string;
  constructor(
    public users: UserService,
    public afs: AngularFirestore,
    public router: Router
  ) {
    this.sons = afs.doc(`users/${users.getUID()}`)
    this.sonsData = this.sons.valueChanges()
  }

  ngOnInit() {
  }

  goTambahAnak() {
    this.router.navigate(['members', 'detail-anak']);
  }


}
