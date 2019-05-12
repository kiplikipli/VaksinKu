import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserService } from './../../services/user.service';
import { NotificationService } from './../../services/notification.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { scheduleService, schedule } from 'src/app/services/schedule';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.page.html',
  styleUrls: ['./schedule-details.page.scss'],
})
export class ScheduleDetailsPage implements OnInit {

  mainuser: AngularFirestoreDocument
  sub
  schedule: schedule = {
    hari: '',
    waktumulai: '',
    waktuselesai: '',
    listvaksin: '',
    tempat: ''
  }
  id = null;
  role: string;
  waktunotif: any;
  harinotif: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private schService: scheduleService,
    private toasCtrl: ToastController,
    private router: Router,
    public notifService: NotificationService,
    public users: UserService,
    private afs: AngularFirestore,
  ) {
    this.mainuser = afs.doc(`users/${users.getUID()}`)
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.sub = this.mainuser.valueChanges().subscribe(profile => {
      this.role = profile.role
    })
  }

  ionViewWillEnter() {
    if (this.id) {
      this.schService.getSchedule(this.id).subscribe(schedule => {
        this.schedule = schedule;
        this.harinotif = new Date(this.schedule.hari);
        this.waktunotif = new Date(this.schedule.waktumulai);
      })
    }
  }

  showToast(msg) {
    this.toasCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  addSchedule() {
    this.schService.addSchedule(this.schedule).then(() => {
      this.router.navigate(['tabs', 'tabs', 'schedule']);
      this.showToast('Schedule Added')
    }, err => {
      this.showToast('There was a problem adding your schedule : (');
    })
  }

  deleteSchedule() {
    this.schService.deleteSchedule(this.schedule.id).then(() => {
      this.router.navigate(['tabs', 'tabs', 'schedule']);
      this.showToast('Schedule Deleted');
    }, err => {
      this.showToast('There was a problem deleting your schedule :(');
    });
  }

  updateSchedule() {
    this.schService.updateSchedule(this.schedule).then(() => {
      this.router.navigate(['tabs', 'tabs', 'schedule']);
      this.showToast('Schedule Updated');
    }, err => {
      this.showToast('There was a problem updating your schedule : (');
    });
  }

  notifyMe() {
    this.notifService.scheduleNotification(this.waktunotif, this.harinotif);
    this.showToast("You'll be notified on the day");
    this.router.navigate(['tabs', 'tabs', 'schedule'])
  }

}
