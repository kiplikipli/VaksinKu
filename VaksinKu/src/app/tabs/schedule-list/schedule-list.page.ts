import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { schedule, scheduleService } from 'src/app/services/schedule';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.page.html',
  styleUrls: ['./schedule-list.page.scss'],
})
export class ScheduleListPage implements OnInit {

  mainuser: AngularFirestoreDocument
  sub
  private schedules: Observable<schedule[]>;
  role: string;
  constructor(
    private schService: scheduleService,
    public users: UserService,
    private afs: AngularFirestore
  ) {
    this.mainuser = afs.doc(`users/${users.getUID()}`)
  }

  ngOnInit() {
    this.schedules = this.schService.getSchedules();
    this.sub = this.mainuser.valueChanges().subscribe(profile => {
      this.role = profile.role
    })
  }

}
