import {Component, OnInit} from '@angular/core';
import {DynamicScriptLoaderService} from '../dynamic-script-loader.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {
  }

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('about-us').then(() => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }

}
