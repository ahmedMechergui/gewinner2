import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rendeder2: Renderer2, private scriptLoader: ScriptsLoaderService) {
  }

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    this.scriptLoader.addScripts(this.rendeder2, 'header');
  }

}
