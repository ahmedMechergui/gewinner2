import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    document.getElementById('header').classList.add('header-transparent');
    document.getElementById('logo').classList.add('hide-on-sd');
    document.getElementById('header').classList.remove('box-shadow');
  }

  ngOnDestroy(): void {
    document.getElementById('header').classList.remove('header-transparent');
    document.getElementById('logo').classList.remove('hide-on-sd');
    document.getElementById('header').classList.add('box-shadow');
  }

}
