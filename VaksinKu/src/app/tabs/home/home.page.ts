import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';
import { HomeSliderService } from './home-slider.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  mainuser: AngularFirestoreDocument
  sub
  role: string;
  constructor(
    private sliderService: HomeSliderService,
    private routes: Router,
    public authService: AuthenticationService,
    public toastCtrl: ToastController,
    public users: UserService,
    public afs: AngularFirestore,
  ) {
    this.mainuser = afs.doc(`users/${users.getUID()}`)
  }

  sliderConfig = {

  }

  logout() {
    this.authService.logout();
    this.routes.navigate(['login']);
    this.showToast('You have been logged out!');
  }

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 1500
    }).then(toast => toast.present());
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  ngOnInit() {
    this.sliderService.getNews('everything?q=vaksin&q=imunisasi&sortBy=publishedAt').subscribe(data => {
      console.log(data);
      this.data = data;
    })
    this.sub = this.mainuser.valueChanges().subscribe(profile => {
      this.role = profile.role
    })
  }

  goSingleNews(article) {
    this.routes.navigate(['tabs', 'tabs', 'news']);
  }

  goProfile() {
    this.routes.navigate(['tabs', 'tabs', 'profile']);
  }

  goNews() {
    this.routes.navigate(['tabs', 'tabs', 'news']);
  }

  goSchedule() {
    this.routes.navigate(['tabs', 'tabs', 'schedule'])
  }

}
