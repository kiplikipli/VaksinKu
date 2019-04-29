import { UploaderPage } from './../uploader/uploader.page';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PpService {

  data: any;

  constructor() {
    this.data = UploaderPage
  }
}
