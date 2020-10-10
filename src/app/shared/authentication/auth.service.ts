import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../services/host-url.service';
import {BehaviorSubject} from 'rxjs';
import {Client} from './client.model';
import {AuthResponse} from './auth-response';
import {Router} from '@angular/router';
import {BrowserDetectorService} from '../services/browser-detector.service';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  clientSubject = new BehaviorSubject<Client>(null);

  url = this.urlService.url;

  constructor(
    private browserDetector: BrowserDetectorService,
    private http: HttpClient,
    private urlService: HostURLService,
    private router: Router) {
  }

  signIn(credentials) {
    return this.http.post<AuthResponse>(this.url + '/clients/login', credentials);
  }

  signUp(clientData) {
    return this.http.post<AuthResponse>(this.url + '/clients', clientData);
  }

  logOut() {
    this.http.post(this.url + '/clients/logout', {}).subscribe();
    this.clientSubject.next(null);
    if (this.browserDetector.isOnBrowser()) {
      localStorage.removeItem('clientData');
    }
    this.redirectToSignIn();
  }

  createClient(response: AuthResponse) {
    const client = new Client(
      response.client.id,
      response.client.clientID,
      response.client.email,
      response.client.phone,
      response.client.name,
      response.client.country,
      response.token,
      new Date(response.client.createdAt),
      new Date(response.client.updatedAt)
    );
    this.clientSubject.next(client);
    this.storeClient(client);
  }

  updateClient(updatedClient) {
    const client = this.clientSubject.getValue();
    client.name = updatedClient.name;
    client.email = updatedClient.email;
    client.phone = updatedClient.phone;
    this.clientSubject.next(client);
    this.storeClient(client);
  }

  autoLogin() {
    if (this.browserDetector.isOnBrowser()) {
      const client: Client = JSON.parse(localStorage.getItem('clientData'));
      if (!client) {
        return;
      }
      this.clientSubject.next(client);
    }
  }

  // stores client in jSON format to local storage
  storeClient(client: Client): void {
    if (this.browserDetector.isOnBrowser()) {
      localStorage.setItem('clientData', JSON.stringify(client));
    }
  }

  redirectToServices() {
    this.router.navigate(['/services']).then();
  }

  redirectToSignIn() {
    this.router.navigate(['/sign-in']).then();
  }
}
