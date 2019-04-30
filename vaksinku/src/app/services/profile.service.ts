import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

export interface profile {
  id?: string,
  name: string,
  email: string,
  phone: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profiles: Observable<profile[]>;
  private profilesColl: AngularFirestoreCollection<profile>;

  constructor(private afs: AngularFirestore) {
    this.profilesColl = this.afs.collection<profile>('users');
    this.profiles = this.profilesColl.valueChanges();
  }

  getProfile(id: string): Observable<profile> {
    return this.profilesColl.doc<profile>(id).valueChanges().pipe(
      take(1),
      map(profile => {
        profile.id = id;
        return profile
      })
    )
  }

  updateProfile(profile: profile): Promise<void> {
    return this.profilesColl.doc(profile.id).update({
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
    })
  }

}
