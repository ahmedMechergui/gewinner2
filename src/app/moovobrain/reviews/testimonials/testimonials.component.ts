import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  reviews = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
  }

  ngOnInit() {
  }
}
