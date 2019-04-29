import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor(private routes : Router) { }

  ngOnInit() {
  }

  goHome(){
    this.routes.navigate(['tabs']);
  }
}
