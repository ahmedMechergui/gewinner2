import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';

@Component({
  selector: 'app-moovobrain-mobile-app',
  templateUrl: './moovobrain-mobile-app.component.html',
  styleUrls: ['./moovobrain-mobile-app.component.css']
})
export class MoovobrainMobileAppComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private renderer2: Renderer2, private scriptsLoader: ScriptsLoaderService) {
  }

  ngOnInit() {
    this.scriptsLoader.addScripts(this.renderer2, 'mobile-app');
  }

}
