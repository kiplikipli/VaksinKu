import { Injectable } from '@angular/core';

interface user {
  name: string,
  email: string,
  phone: string,
  uid: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user: user

  constructor() { }

  setUser(user: user) {
    this.user = user
  }

  getUID(): string {
    return this.user.uid
  }


}
