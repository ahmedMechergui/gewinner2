import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from './host-url.service';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesStorageService {
  url = this.urlService.url;

  constructor(private http: HttpClient, private urlService: HostURLService) {
  }

  fetchAccessories() {
    return this.http.get(this.url + '/accessories');
  }

  getOneAccessorie(id: string) {
    return this.http.get(this.url + '/accessories/' + id);
  }
}
