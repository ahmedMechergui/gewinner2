import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';

@Component({
  selector: 'app-moovobrain-tablet-app',
  templateUrl: './moovobrain-tablet-app.component.html',
  styleUrls: ['./moovobrain-tablet-app.component.css']
})
export class MoovobrainTabletAppComponent implements OnInit, AfterViewInit {

  constructor(private scriptsLoader: ScriptsLoaderService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.scriptsLoader.addManyScriptsAsync('/assets/vendor/video/video.min.js').then();
  }

}
