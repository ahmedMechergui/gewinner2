import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-accessorie-item',
  templateUrl: './accessorie-item.component.html',
  styleUrls: ['./accessorie-item.component.css']
})
export class AccessorieItemComponent implements OnInit {
  isRated: boolean;
  ratings = 423;
  // @ViewChild('quantity', {static: true}) quantityElement: ElementRef;
  quantity = 1;

  constructor() {
  }

  ngOnInit() {
    this.starClicked(4);
    this.isRated = false;
  }

  starClicked(starNumber: number) {
    if (!this.isRated) {
      this.isRated = true;
      this.ratings++;
    }
    for (let i = 1; i < 6; i++) {
      const starID = 'star' + i;
      document.getElementById(starID).style.color = starNumber >= i ? '#fc0' : '#ccc';
    }
  }

  quantityPlus() {
    this.quantity++;
  }

  quantityMinus() {
    this.quantity > 1 ? this.quantity-- : this.quantity = 1;
  }


}
