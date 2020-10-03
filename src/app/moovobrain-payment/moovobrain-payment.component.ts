import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../shared/services/host-url.service';
import {ActivatedRoute} from '@angular/router';
import {ToastService} from '../shared/services/tost.service';

@Component({
  selector: 'app-moovobrain-payment',
  templateUrl: './moovobrain-payment.component.html',
  styleUrls: ['./moovobrain-payment.component.css']
})
export class MoovobrainPaymentComponent implements OnInit {
  url = this.urlService.url;
  isPaid = false;
  isLoading = false;
  form: FormGroup;
  @ViewChild('slipInputLabel', {static: true}) slipInputLabel;

  constructor(private http: HttpClient,
              private urlService: HostURLService,
              private activatedRoute: ActivatedRoute,
              private toast: ToastService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      transferSlip: new FormControl(null, [Validators.required])
    });
  }

  checkIfOrderExist() {

  }

  // this function to update the "payment slip" form field whenever a file is selected
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        transferSlip: file
      });
      document.getElementById('slipInputLabel').innerHTML = file.name;
    }
  }

  sendHttpRequest() {
    const id = this.activatedRoute.snapshot.params.id;
    const formData = new FormData();
    formData.append('id', id);
    formData.append('payment-slip', this.form.get('transferSlip').value);

    this.isLoading = true;
    this.http.post(this.url + '/moovobrain-payment', formData).subscribe(() => {
      this.isPaid = true;
      this.isLoading = false;
    }, () => {
      this.toast.error('Unable to confirm your payment.', 'Error :');
      this.isLoading = false;
    });
  }

}
