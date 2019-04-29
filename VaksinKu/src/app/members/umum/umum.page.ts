import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-umum',
  templateUrl: './umum.page.html',
  styleUrls: ['./umum.page.scss'],
})
export class UmumPage implements OnInit {
  imageURL: any;

  constructor(private authService: AuthenticationService, public routes: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.routes.navigate(['tabs']);
  }

  changeProfilePicture() {
    this.routes.navigate(['members', 'uploader']);
  }

}
