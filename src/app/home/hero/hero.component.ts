import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
 // @Input() imageName = 'hero.jpg';
 @Input() imageName = 'hero-bg.jpg';


  constructor() {
  }

  ngOnInit() {
    document.getElementById('header').classList.add('header-transparent');
    document.getElementById('logo').classList.add('hide-on-sd');
    document.getElementById('header').classList.remove('box-shadow');

    // tslint:disable-next-line:max-line-length
    document.getElementById('hero').style.setProperty('--bg-url', 'linear-gradient(to right, rgba(30, 67, 86, 0.8), rgba(30, 67, 86, 0.6)), url("assets/img/' + this.imageName + '") center top no-repeat');
  }

  ngOnDestroy(): void {
    document.getElementById('header').classList.remove('header-transparent');
    document.getElementById('logo').classList.remove('hide-on-sd');
    document.getElementById('header').classList.add('box-shadow');
  }

}
