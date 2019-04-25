import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_KEY = environment.apiKey;
const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class HomeSliderService {
  currentArticle : any;

  constructor(private http : HttpClient) { }

  getNews(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
