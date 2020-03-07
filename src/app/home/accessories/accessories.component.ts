import {Component, OnInit} from '@angular/core';
import {DynamicScriptLoaderService} from '../../dynamic-script-loader.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {


  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {
  }

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('slick-carousel', 'accessories-carousel').then(() => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
