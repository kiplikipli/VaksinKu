import { HomeSliderService } from './home-slider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;

  constructor(private sliderService: HomeSliderService, private routes: Router, public authService: AuthenticationService) { }

  sliderConfig = {

  }

  logout() {
    this.authService.logout();
    this.routes.navigate(['tabs']);
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  ngOnInit() {
    this.sliderService.getNews('everything?q=vaksin&q=imunisasi&sortBy=publishedAt').subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  goSingleNews(article) {
    this.routes.navigate(['tabs', 'tabs', 'news']);
  }

}
