import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../../shared/services/host-url.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesRequestService {
  url = this.urlService.url;
  scheduledControls: Date[] = [];
  isScheduledControlsValidated = false;

  constructor(private http: HttpClient, private  urlService: HostURLService) {
  }

  requestQuarterlyQualityControl(addedYears: number) {
    return this.http.post(this.url + '/services/control', {
      addedYears
    });
  }

  requestTrainingSession(hours: number) {
    return this.http.post(this.url + '/services/training', {
      hours
    });
  }

  requestMaintenance() {
    return this.http.post(this.url + '/services/maintenance', {});
  }

  // returns an observable with all the future control schedules as a response
  getScheduledControls() {
    return this.http.get(this.url + '/services/control');
  }

  /*
   this method will render all future schedules for logged client
   this method is called whenever the clicks on schedules link
  */
  fetchSchedules() {
    /*
     we need to empty the table the table on every request because this will
     cause old schedules to stack on each other
     */
    while (this.scheduledControls.length > 0) {
      this.scheduledControls.pop();
    }

    this.getScheduledControls().subscribe((response: any) => {
      const schedules: Array<any> = response.schedules;
      this.isScheduledControlsValidated = response.isValidated;
      console.log(this.isScheduledControlsValidated);
      if (response.length === 0) {
        return;
      }
      console.log(schedules);
      schedules.forEach(i => {
        this.scheduledControls.push(i.schedule);
      });
    });
  }
}
