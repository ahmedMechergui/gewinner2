import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  isActive = 1;

  constructor() {
  }

  ngOnInit() {
    console.log('form created');
  }

  setActive(titleNumber: number) {
    this.isActive = titleNumber;
  }
}
