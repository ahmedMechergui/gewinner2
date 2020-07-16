import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from './host-url.service';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersStorageService {
  url = this.urlService.url;

  constructor(private http: HttpClient, private urlService: HostURLService) {
  }

  FetchTeamMembers() {
    return this.http.get(this.url + '/members/all');
  }
}
