import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  starClicked(starNumber: number) {
    for (let i = 1; i < 6; i++) {
      const starID = 'star' + i;
      document.getElementById(starID).style.color = starNumber >= i ? '#fc0' : '#ccc';
    }
  }

}
