import {Component, Input, OnInit} from '@angular/core';
import {HostURLService} from '../../shared/services/host-url.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
  selectedProductImage = 1;
  url = this.urlService.url;

  @Input() imageUrlArray = [
    'assets/img/accessories/images/headrest-3.jpg'];

  constructor(public urlService: HostURLService) {
  }

  ngOnInit() {
  }

}
