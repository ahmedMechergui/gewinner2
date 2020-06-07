import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
  selectedProductImage = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
