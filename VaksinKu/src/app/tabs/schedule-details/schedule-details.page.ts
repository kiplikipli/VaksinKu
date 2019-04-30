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

  schedule: schedule = {
    hari: '',
    waktu: '',
    listvaksin: '',
    tempat: ''
  }
  id = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private schService: scheduleService,
    private toasCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    if (this.id) {
      this.schService.getSchedule(this.id).subscribe(schedule => {
        this.schedule = schedule;
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
      this.router.navigate(['schedule-list']);
      this.showToast('Schedule Added')
    }, err => {
      this.showToast('There was a problem adding your schedule : (');
    })
  }

  deleteSchedule() {
    this.schService.deleteSchedule(this.schedule.id).then(() => {
      this.router.navigate(['schedule-list']);
      this.showToast('Schedule Deleted');
    }, err => {
      this.showToast('There was a problem deleting your schedule :(');
    });
  }

  updateSchedule() {
    this.schService.updateSchedule(this.schedule).then(() => {
      this.router.navigate(['schedule-list']);
      this.showToast('Schedule Updated');
    }, err => {
      this.showToast('There was a problem updating your schedule : (');
    });
  }



}
