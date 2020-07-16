import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsStorageService} from '../../shared/services/news-storage.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../shared/models/article.model';
import {HostURLService} from '../../shared/services/host-url.service';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit, OnDestroy {
  article: Article = null;
  url = this.urlService.url;

  constructor(private newsStorageService: NewsStorageService,
              private activatedRoute: ActivatedRoute,
              public urlService: HostURLService
  ) {
  }

  ngOnInit() {
    this.fetchArticle();
  }

  fetchArticle() {
    const id = this.activatedRoute.snapshot.params.id;
    this.newsStorageService.getOneArticle(id).subscribe(article => {
      this.article = article;
    });
  }

  ngOnDestroy(): void {
  }

  onShare() {
    window.alert('sharing button cannot be dynamic on front-end! \n they will be implemented later with nodejs');
  }
}
