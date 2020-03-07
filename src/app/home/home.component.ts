import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() { }

  ngOnInit() {
    document.getElementById('header').classList.add('header-transparent');
    document.getElementById('logo').classList.add('hide-on-sd');
  }

  ngOnDestroy(): void {
    document.getElementById('header').classList.remove('header-transparent');
    document.getElementById('logo').classList.remove('hide-on-sd');
  }
}
