import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface schedule {
  id?: string,
  hari: string,
  waktu: string,
  listvaksin: string,
  tempat: string
}

@Injectable({
  providedIn: 'root'
})
export class scheduleService {
  private schedules: Observable<schedule[]>;
  private schedulesColl: AngularFirestoreCollection<schedule>;

  constructor(private afs: AngularFirestore) {
    this.schedulesColl = this.afs.collection<schedule>('schedule');
    this.schedules = this.schedulesColl.valueChanges();
  }

  getSchedules(): Observable<schedule[]> {
    return this.schedules;
  }

  getSchedule(id: string): Observable<schedule> {
    return this.schedulesColl.doc<schedule>(id).valueChanges().pipe(
      take(1),
      map(schedule => {
        schedule.id = id;
        return schedule
      })
    )
  }

  addSchedule(schedule: schedule): Promise<DocumentReference> {
    return this.schedulesColl.add(schedule);
  }

  updateSchedule(schedule: schedule): Promise<void> {
    return this.schedulesColl.doc(schedule.id).update({
      hari: schedule.hari,
      waktu: schedule.waktu,
      listvaksin: schedule.listvaksin,
      tempat: schedule.tempat
    })
  }

  deleteSchedule(id: string): Promise<void> {
    return this.schedulesColl.doc(id).delete();
  }
}
