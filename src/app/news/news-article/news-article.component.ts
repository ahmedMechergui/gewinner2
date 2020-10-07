import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsStorageService} from '../../shared/services/news-storage.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../../shared/models/article.model';
import {HostURLService} from '../../shared/services/host-url.service';
import {ShareButtonsConfig, ShareService} from 'ngx-sharebuttons';


@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css'],
  providers: [ShareService]
})
export class NewsArticleComponent implements OnInit, OnDestroy {
  article: Article = null;
  url = this.urlService.url;

  constructor(private newsStorageService: NewsStorageService,
              private activatedRoute: ActivatedRoute,
              public urlService: HostURLService,
              private shareService: ShareService
  ) {
  }

  ngOnInit() {
    this.fetchArticle();
    this.initShareButtons();
  }

  initShareButtons() {
    const customConfig: ShareButtonsConfig = {
      include: ['facebook', 'twitter', 'linkedin'],
      exclude: [],
      gaTracking: true,
      autoSetMeta: true,
      twitterAccount: 'username',
      title : 'hey you',
      description : 'this is the desc'
    };
    this.shareService.setConfig(customConfig);
  }

  fetchArticle() {
    const id = this.activatedRoute.snapshot.params.id;
    this.newsStorageService.getOneArticle(id).subscribe(article => {
      this.article = article;
    });
  }

  ngOnDestroy(): void {
  }
}
