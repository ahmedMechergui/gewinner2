import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';

@Component({
  selector: 'app-moovobrain-video',
  templateUrl: './moovobrain-video.component.html',
  styleUrls: ['./moovobrain-video.component.css']
})
export class MoovobrainVideoComponent implements OnInit {

  constructor(private scriptsLoader: ScriptsLoaderService,private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.scriptsLoader.addScripts(this.renderer2, 'moovobrain-video');
  }

}
