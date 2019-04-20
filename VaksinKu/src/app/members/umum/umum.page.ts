import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-umum',
  templateUrl: './umum.page.html',
  styleUrls: ['./umum.page.scss'],
})
export class UmumPage implements OnInit {

  constructor(private authService : AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }
}
