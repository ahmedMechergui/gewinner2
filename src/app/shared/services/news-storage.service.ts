import {Injectable} from '@angular/core';
import {HostURLService} from './host-url.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Article} from '../models/article.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsStorageService {
  url = this.urlService.url;
  currentPage = 1;

  constructor(private urlService: HostURLService, private http: HttpClient) {
  }

  // this function will render an array with 4 articles
  getManyArticles(page: number): Observable<Article[]> {
    this.currentPage = page;
    let skip = 0;
    for (let i = 1; i < page; i++) {
      skip += 4;
    }
    return this.http.get(this.url + '/articles?limit=4&skip=' + skip).pipe(map((articles: Article[]) => {
      return articles;
    }));
  }

  getOneArticle(id: string): Observable<Article> {
    return this.http.get(this.url + '/articles/' + id).pipe(map((article: Article) => {
      return article;
    }));
  }

  getComingEvents() {
//  this method will bring the last two coming events
    return this.http.get(this.url + '/events?limit=2');
  }
}
