import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../shared/authentication/auth.service';
import {HostURLService} from '../../shared/services/host-url.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesRequestService {
  url = this.urlService.url;

  constructor(private http: HttpClient, private  urlService: HostURLService, private authService: AuthService) {
  }

  requestQuarterlyQualityControl(addedYears: number) {
    return this.http.post(this.url + '/services/control', {
      addedYears
    });
  }
}
