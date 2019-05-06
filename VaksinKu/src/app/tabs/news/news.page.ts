import { NewsService } from './news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;

  constructor(private newsService: NewsService, private route: Router) { }

  ngOnInit() {
    this.newsService.getNews('everything?q=vaksin&q=imunisasi&sortBy=publishedAt').subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  goSingleNews(article) {
    this.newsService.currentArticle = article;
    window.open(article.url, '_system')
  }

}
