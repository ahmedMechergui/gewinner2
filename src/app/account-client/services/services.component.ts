import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServicesRequestService} from './services-request.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  formQualityControl: FormGroup;
  formTrainingSession: FormGroup;
  formMaintenanceRequest: FormGroup;

  qualityControlIsLoading = false;

  constructor(private requestService: ServicesRequestService) {
  }

  ngOnInit() {
    this.initServicesForms();
  }

  initServicesForms() {
    this.formQualityControl = new FormGroup({
      addedYears: new FormControl(null)
    });
    this.formTrainingSession = new FormGroup({
      addedHours: new FormControl(null)
    });
    this.formMaintenanceRequest = new FormGroup({});
  }

  onSubmit() {
    window.alert('Services will be implemented later with nodejs.');
  }

  requestQualityControl() {
    this.qualityControlIsLoading = true;
    this.requestService.requestQuarterlyQualityControl(+this.formQualityControl.get('addedYears').value).subscribe(response => {
        this.qualityControlIsLoading = false;
      }
    );
  }

}
