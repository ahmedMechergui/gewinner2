import {Component, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';
import {HeroSlide} from './heroSlide.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  // slides can be managed by the admin dashboard

  slidesHome: HeroSlide[] = [
    new HeroSlide('Welcome to Gewinner', 'Together to facilitate disabled people’s life'),
    new HeroSlide('Time to move', 'MOOVOBRAIN is a steering system of powered wheelchairs for\n' +
      '          physically disabled people who cannot use their upper members to pilot conventional\n' +
      '          wheelchairs with joystick.'),
    new HeroSlide('For those we love', 'Mobility, Security and Independence')
  ];

  slidesMoovobrain: HeroSlide[] = [
    new HeroSlide('MOOVOBRAIN', 'MOOVOBRAIN is a steering system of powered wheelchairs for\n' +
      '          physically disabled people who cannot use their upper members to pilot conventional\n' +
      '          wheelchairs with joystick.'),
    new HeroSlide('MOOVOBRAIN', 'Mobility, Security and Independence'),
  ];


  // these information will be provided by moovobrain page
  @Input() imageName = 'hero-bg.jpg';
  @Input() isOnHome = true; // if true we are on home page , if false we are on moovobrain page


  constructor(private scriptloader: ScriptsLoaderService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.loadScripts();
    this.updateHeader();
  }

  updateHeader(): void {
    document.getElementById('header').classList.add('header-transparent');
    document.getElementById('logo').classList.add('hide-on-sd');
    document.getElementById('header').classList.remove('box-shadow');
  }

  ngOnDestroy(): void {
    document.getElementById('header').classList.remove('header-transparent');
    document.getElementById('logo').classList.remove('hide-on-sd');
    document.getElementById('header').classList.add('box-shadow');
  }

  loadScripts() {
    this.scriptloader.addScripts(this.renderer, 'moovobrain-scroll-down');
  }

}
