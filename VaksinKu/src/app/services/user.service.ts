import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

interface user {
  name: string,
  email: string,
  address: string,
  phone: string,
  uid: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user: user

  constructor(public afAuth: AngularFireAuth) { }

  setUser(user: user) {
    this.user = user
  }

  getUID(): string {
    return this.user.uid
  }

  getNama(): string {
    return this.user.name
  }

  getAlamat(): string {
    return this.user.address
  }

  getNo_hp(): string {
    return this.user.phone
  }

  getEmail(): string {
    return this.user.email
  }

  reAuth(email: string, password: string) {
    return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(email, password))
  }

  updatePassword(newpassword: string) {
    return this.afAuth.auth.currentUser.updatePassword(newpassword)
  }

  updateEmail(newemail: string) {
    return this.afAuth.auth.currentUser.updateEmail(newemail)
  }

  updateAlamat(new_address: string) {
    return this.user.address = new_address
  }

  updateNo_hp(new_phone: string) {
    return this.user.phone = new_phone
  }

  updateNama(new_name: string) {
    return this.user.name = new_name
  }
}
