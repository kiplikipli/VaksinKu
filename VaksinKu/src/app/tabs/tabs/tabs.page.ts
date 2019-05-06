import { AlertService } from './../../services/alert.service';
import { AuthGuardService } from './../../services/auth-guard.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private authGuard: AuthGuardService, private routes: Router, private alert: AlertService) { }

  ngOnInit() {
  }

  verifAuth() {
    if (this.authGuard.canActivate() === false) {
      this.alert.presentAlert('not-login-yet');
      this.routes.navigate(['login']);
    }
  }
}
