import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { schedule, scheduleService } from 'src/app/services/schedule';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.page.html',
  styleUrls: ['./schedule-list.page.scss'],
})
export class ScheduleListPage implements OnInit {

  private schedules: Observable<schedule[]>;

  constructor(private schService: scheduleService) { }

  ngOnInit() {
    this.schedules = this.schService.getSchedules();
  }

}
