import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-slides',
  templateUrl: 'slides.page.html',
  styleUrls: ['slides.page.scss'],
})
export class SlidesPage {
  constructor(public router: Router) {

  }
  slides = [
    {
      img: 'assets/img/jaja.jpg',
      titulo: 'apa itu vaksinku ?'

    },
    {
      img: 'assets/img/HIY.jpg',
      titulo: 'alasan pakai vaksinku?'

    },
    {
      img: 'assets/img/juju.jpg',
      titulo: 'Kuy log-in now'
    }
  ];

  goLogin() {
    this.router.navigate(['login']);
  }

  goRegister() {
    this.router.navigate(['register']);
  }
}
