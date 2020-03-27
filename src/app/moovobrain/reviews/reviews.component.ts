import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private scriptsLoader: ScriptsLoaderService, private rendered2: Renderer2) {
  }

  ngOnInit() {
    this.loadScripts();
  }

  loadScripts() {
    this.scriptsLoader.addScripts(this.rendered2, 'reviews-testimonials');
  }

}
