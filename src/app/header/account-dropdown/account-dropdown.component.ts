import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/authentication/auth.service';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.css']
})
export class AccountDropdownComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }


}
