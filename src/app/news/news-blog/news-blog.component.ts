import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/models/article.model';
import {NewsStorageService} from '../../shared/services/news-storage.service';
import {HostURLService} from '../../shared/services/host-url.service';

@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrls: ['./news-blog.component.css']
})
export class NewsBlogComponent implements OnInit {
  articles: Article[] = [];
  url = this.urlService.url;
  currentPage = this.newsStorageService.currentPage;
  isError = false;

  constructor(private newsStorageService: NewsStorageService, private urlService: HostURLService) {
  }

  ngOnInit() {
    this.loadArticlesByPage(this.currentPage);
  }

  loadArticlesByPage(page: number): void {
    this.isError = false;
    this.articles = [];
    this.newsStorageService.getManyArticles(page).subscribe(articles => {
      this.articles = articles;
      this.currentPage = page;
    }, () => {
      this.isError = true;
    });
    this.gotoTop();
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
