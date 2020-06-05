import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';
import {Accessorie} from './accessorie.model';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  // accessories shall be added by admin dashboard
  accessories: Accessorie[] = [
    new Accessorie('Camera',
      'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sintoccaecati cupiditate non provident',
      'assets/img/accessories/icons/wheelchair-camera.jpg'),
    new Accessorie('Adjustable table', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n' +
      '            fugiat nulla pariatur', 'assets/img/accessories/icons/adjustable-table.jpg'),
    new Accessorie('Rear-view mirror', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
      '            mollit anim id est laborum', 'assets/img/accessories/icons/rear-view-mirror.jpg'),
    new Accessorie('Security belt', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium\n' +
      '            voluptatum deleniti atque', 'assets/img/accessories/icons/wheelchair-security-belt.jpg'),
    new Accessorie('Headrest neck support', 'Odio ducimus qui blanditiis praesentium, in culpa qui officia deserunt\n' +
      '            occaecat cupidatat non proident dromo', 'assets/img/accessories/icons/headrest.jpg')
  ];

  constructor(private renderer2: Renderer2, private scriptsLoader: ScriptsLoaderService) {
  }


  ngOnInit() {
    this.loadScripts();

  }

  loadScripts() {
    this.scriptsLoader.addScripts(this.renderer2, 'slick.min', 'accessories-carousel');
  }
}
