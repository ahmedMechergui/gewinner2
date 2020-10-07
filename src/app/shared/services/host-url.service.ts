import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostURLService {
  // change the url depending on the server you're hosting the API on

  // url = 'http://127.0.0.1:3000';
  url = 'https://gewinner-api.herokuapp.com';

  constructor() {
  }
}
