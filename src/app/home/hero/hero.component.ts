import {Component, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';
import {HeroSlide} from './heroSlide.model';
import {BrowserDetectorService} from '../../shared/services/browser-detector.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {

  isVoiceMode: boolean;

  // slides can not be managed by the admin dashboard

  // these slides are for home page
  slidesHome: HeroSlide[] = [
    new HeroSlide('Moovobrain v1.0', 'Pre-Order now and save 200 USD'),
  ];

  // these slides are for moovobrain page voice mode
  slidesMoovobrainVoice: HeroSlide[] = [
    new HeroSlide('Moovobrain v1.0', 'Stay comfortable and drive your wheelchair using your voice')
  ];

  // these slides are for moovobrain page brain mode
  slidesMoovobrainBrain: HeroSlide[] = [
    new HeroSlide('Moovobrain b1.0', 'MOOVOBRAIN is a steering system of powered wheelchairs for\n' +
      '          physically disabled people who cannot use their upper members to pilot conventional\n' +
      '          wheelchairs with joystick.')
  ];


  // these information will be provided by moovobrain page
  @Input() imageName = 'hero-bg.jpg';
  @Input() isOnHome = true; // if true we are on home page , if false we are on moovobrain page


  constructor(private browserDetectorService: BrowserDetectorService,
              private scriptloader: ScriptsLoaderService,
              private renderer: Renderer2,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadScripts();
    this.updateHeader();
    this.setIsVoiceMode();
  }

  updateHeader(): void {
    if (this.browserDetectorService.isOnBrowser()) {
      document.getElementById('header').classList.add('header-transparent');
      document.getElementById('logo').classList.add('hide-on-sd');
      document.getElementById('header').classList.remove('box-shadow');
    }
  }

  ngOnDestroy(): void {
    if (this.browserDetectorService.isOnBrowser()) {
      document.getElementById('header').classList.remove('header-transparent');
      document.getElementById('logo').classList.remove('hide-on-sd');
      document.getElementById('header').classList.add('box-shadow');
    }
  }

  loadScripts() {
    this.scriptloader.addScripts(this.renderer, 'moovobrain-scroll-down');
  }

  setIsVoiceMode() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.isVoiceMode = params.mode && params.mode.toLowerCase() === 'voice';
    });
    this.activatedRoute.fragment.subscribe();
  }

}
