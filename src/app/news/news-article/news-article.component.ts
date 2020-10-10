import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsStorageService} from '../../shared/services/news-storage.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../shared/models/article.model';
import {HostURLService} from '../../shared/services/host-url.service';
import {Meta} from '@angular/platform-browser';

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
              public urlService: HostURLService,
              private metadata: Meta
  ) {
  }

  ngOnInit() {
    this.fetchArticle();
  }

  fetchArticle() {
    const id = this.activatedRoute.snapshot.params.id;
    this.newsStorageService.getOneArticle(id).subscribe(article => {
      this.article = article;
      this.updateMetadata();
    });
  }

  ngOnDestroy(): void {
  }

  updateMetadata(): void {
    this.metadata.updateTag({content: this.article.title}, `name='title-for-sharer'`);
    this.metadata.updateTag({content: this.url + this.article.imageURL}, `name='image-for-sharer'`);
    this.metadata.updateTag({content : this.article.about}, `name='description-for-sharer'`);
  }
}
