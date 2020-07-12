import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  title = 'Gewinner';

  ngOnInit() {
    this.authService.autoLogin();
  }


}
