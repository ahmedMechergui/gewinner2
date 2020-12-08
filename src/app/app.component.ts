import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthService} from './shared/authentication/auth.service';
import {IsOnHomeService} from './shared/services/is-on-home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
              public isOnHomeService: IsOnHomeService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  title = 'Gewinner';

  ngOnInit() {
    this.authService.autoLogin();
    this.changeDetectorRef.detectChanges();
  }


}
