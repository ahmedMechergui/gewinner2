import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scheduled-controls',
  templateUrl: './scheduled-controls.component.html',
  styleUrls: ['./scheduled-controls.component.css']
})
export class ScheduledControlsComponent implements OnInit {
  scheduledControls: Date[] = [
    new Date('9-3-20'),
    new Date('12-3-2020'),
    new Date('3-5-2021'),
    new Date('6-6-2021')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
