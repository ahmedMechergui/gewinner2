import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/authentication/auth.service';
import {ServicesRequestService} from '../../account-client/services/services-request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.css']
})
export class AccountDropdownComponent implements OnInit {

  constructor(public authService: AuthService,
              public servicesRequestService: ServicesRequestService,
              private router: Router) {
  }

  ngOnInit() {
  }


}
