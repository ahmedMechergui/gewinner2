import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  constructor(private renderer2: Renderer2, private scriptsLoader: ScriptsLoaderService) {
  }


  ngOnInit() {
    this.loadScripts();

  }

  loadScripts() {
    this.scriptsLoader.addScripts(this.renderer2, 'slick.min', 'accessories-carousel');
  }
}
