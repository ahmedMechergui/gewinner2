import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../shared/services/host-url.service';
import {ActivatedRoute, Router} from '@angular/router';
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
  order: any = null;
  form: FormGroup;
  showPage = false;
  @ViewChild('slipInputLabel', {static: true}) slipInputLabel;

  constructor(private http: HttpClient,
              private urlService: HostURLService,
              private activatedRoute: ActivatedRoute,
              private toast: ToastService,
              private router: Router) {
  }

  ngOnInit() {
    this.FetchOrder();
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      transferSlip: new FormControl(null, [Validators.required])
    });
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

  // fetch the order from backend
  // - if it exists we check if it is payed and decide which elements to show.
  // - if it does not exist we redirect user to not-found page.
  FetchOrder() {
    const id = this.activatedRoute.snapshot.params.id;
    this.http.post(this.url + '/moovobrain-one-order', {id}).subscribe((order: any) => {
      this.order = order;
      this.isPaid = !!this.order.paymentSlipURL;
      this.showPage = true;
    }, () => {
      this.router.navigate(['/not-found']).then(() => {
        this.toast.error('Order does not exist!', 'Error 404 : ');
      });
    });
  }

  // Send the payment slip to our server
  sendHttpRequest() {
    const id = this.activatedRoute.snapshot.params.id;
    const formData = new FormData();
    formData.append('id', id);
    formData.append('payment-slip', this.form.get('transferSlip').value);

    this.isLoading = true;
    this.http.post(this.url + '/moovobrain-payment', formData).subscribe(() => {
      this.order.status = 'pending';
      this.isPaid = true;
      this.isLoading = false;
    }, () => {
      this.toast.error('Unable to confirm your payment.', 'Error :');
      this.isLoading = false;
    });
  }

}
