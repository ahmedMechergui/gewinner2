import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../services/host-url.service';
import {BehaviorSubject} from 'rxjs';
import {Client} from './client.model';
import {AuthResponse} from './auth-response';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  clientSubject = new BehaviorSubject<Client>(null);

  url = this.urlService.url;

  constructor(private http: HttpClient, private urlService: HostURLService, private router: Router) {
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
    localStorage.removeItem('clientData');
    this.redirectToSignIn();
  }

  createClient(response: AuthResponse) {
    const client = new Client(
      response.client._id,
      response.client.clientID,
      response.client.email,
      response.client.phone,
      response.client.name,
      response.client.country,
      response.token,
      new Date(response.client.createdAt),
      new Date(response.client.updatedAt)
    );
    console.log(client);
    this.clientSubject.next(client);
    this.storeClient(client);
  }

  autoLogin() {
    const client: Client = JSON.parse(localStorage.getItem('clientData'));
    if (!client) {
      return;
    }
    this.clientSubject.next(client);
  }

  // stores client in jSON format to local storage
  storeClient(client: Client): void {
    localStorage.setItem('clientData', JSON.stringify(client));
  }

  redirectToServices() {
    this.router.navigate(['/services']).then();
  }

  redirectToSignIn() {
    this.router.navigate(['/sign-in']).then();
  }
}
