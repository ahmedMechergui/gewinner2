import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServicesRequestService} from './services-request.service';
import {ToastrService} from 'ngx-toastr';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

  formQualityControl: FormGroup;
  formTrainingSession: FormGroup;
  formMaintenanceRequest: FormGroup;

  qualityControlIsLoading = false;
  trainingSessionIsLoading = false;
  maintenanceRequestIsLoading = false;

  // every subscription is pushed into this array to be all unsubscribed on destroy
  subscriptionsArray: Subscription[] = [];

  constructor(private toaster: ToastrService, private requestService: ServicesRequestService) {
  }

  ngOnInit() {
    this.initServicesForms();
  }

  initServicesForms() {
    this.formQualityControl = new FormGroup({
      addedYears: new FormControl(null, [Validators.required])
    });
    this.formTrainingSession = new FormGroup({
      addedHours: new FormControl(null, [Validators.required])
    });
    this.formMaintenanceRequest = new FormGroup({});
  }

  requestQualityControl(): void {
    this.qualityControlIsLoading = true;
    const subscription = this.requestService.requestQuarterlyQualityControl(+this.formQualityControl.get('addedYears').value)
      .subscribe(() => {
          this.qualityControlIsLoading = false;
          this.showToaster('success', 'You will be informed once the request is validated', 'Request added successfully');
        }
        , () => {
          this.qualityControlIsLoading = false;
          this.showToaster('error', 'Try again later', 'ERROR :');
        });
    this.subscriptionsArray.push(subscription);
  }

  requestTrainingSession(): void {
    const hours = +this.formTrainingSession.get('addedHours').value;
    this.trainingSessionIsLoading = true;
    const subscription = this.requestService.requestTrainingSession(hours).subscribe(() => {
      this.trainingSessionIsLoading = false;
      this.showToaster('success', 'We will contact you soon to validate your request', 'Request added successfully');
    }, error => {
      this.trainingSessionIsLoading = false;
      const errorMessage = error.status === 412 ? 'You already have a pending request' : 'Try again later';
      this.showToaster('error', errorMessage, 'ERROR :');
    });
    this.subscriptionsArray.push(subscription);
  }

  requestMaintenance(): void {
    this.maintenanceRequestIsLoading = true;
    const subscription = this.requestService.requestMaintenance().subscribe(() => {
      this.maintenanceRequestIsLoading = false;
      this.showToaster('success', 'We will contact you soon to fix your problem', 'Request added successfully');
    }, error => {
      this.maintenanceRequestIsLoading = false;
      const errorMessage = error.status === 412 ? 'You already have a pending request' : 'Try again later';
      this.showToaster('error', errorMessage, 'ERROR :');
    });
    this.subscriptionsArray.push(subscription);
  }


  showToaster(toasterType: string, message: string, title?: string): void {
    title = title ? title : '';
    const params = {positionClass: 'toast-bottom-right', closeButton: true, disableTimeOut: true};
    if (toasterType === 'success') {
      this.toaster.success(message, title, params);
    } else if (toasterType === 'error') {
      this.toaster.error(message, title, params);
    }
  }

  ngOnDestroy(): void {
    this.subscriptionsArray.forEach(subscription => {
      subscription.unsubscribe();
    });
  }


}
