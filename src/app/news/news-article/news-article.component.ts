import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css']
})
export class NewsArticleComponent implements OnInit, OnDestroy {

  currentURL: string;

  constructor() {
  }

  ngOnInit() {
    this.currentURL = window.location.href;
  }

  ngOnDestroy(): void {
  }

  onShare() {
        window.alert('sharing button cannot be dynamic on front-end! \n they will be implemented later with nodejs');
  }
}
