import {Component, OnDestroy, OnInit} from '@angular/core';
import {IsOnHomeService} from '../shared/services/is-on-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private isOnHomeService: IsOnHomeService) {
  }

  ngOnInit(): void {
    this.isOnHomeService.isOnHome = true;
  }

  ngOnDestroy(): void {
    this.isOnHomeService.isOnHome = false;
  }
}
