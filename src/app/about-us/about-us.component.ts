import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {

  constructor(private scriptsLoader: ScriptsLoaderService, private rendered2: Renderer2) {
  }

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    this.scriptsLoader.addScripts(this.rendered2, 'about-us');
  }

}
