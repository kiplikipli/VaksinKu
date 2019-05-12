import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-detail-anak',
  templateUrl: './detail-anak.page.html',
  styleUrls: ['./detail-anak.page.scss'],
})
export class DetailAnakPage implements OnInit {

  name: string;
  age: string;
  constructor(
    public afs: AngularFirestore,
    public user: UserService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addSon() {
    const name = this.name;
    const age = this.age;

    this.afs.doc(`users/${this.user.getUID()}`).update({
      anak: firestore.FieldValue.arrayUnion({
        name,
        age
      })
    })
    this.router.navigate(['members', 'data-anak']);
  }
}
