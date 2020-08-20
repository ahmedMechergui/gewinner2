import {Component, OnInit} from '@angular/core';
import {ServicesRequestService} from '../services-request.service';

@Component({
  selector: 'app-scheduled-controls',
  templateUrl: './scheduled-controls.component.html',
  styleUrls: ['./scheduled-controls.component.css']
})
export class ScheduledControlsComponent implements OnInit {
  scheduledControls: Date[] = this.requestServices.scheduledControls;
  isValidated = this.requestServices.isScheduledControlsValidated;

  constructor(private requestServices: ServicesRequestService) {
  }

  ngOnInit() {
  }


}
