import {Component, OnInit} from '@angular/core';
import {DynamicScriptLoaderService} from '../dynamic-script-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {
  }

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('header').then(() => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

}
