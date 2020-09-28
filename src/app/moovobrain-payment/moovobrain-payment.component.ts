import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-moovobrain-payment',
  templateUrl: './moovobrain-payment.component.html',
  styleUrls: ['./moovobrain-payment.component.css']
})
export class MoovobrainPaymentComponent implements OnInit {
  isPaid = false;
  form: FormGroup;
  @ViewChild('slipInputLabel', {static: true}) slipInputLabel;

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      transferSlip: new FormControl(null, [Validators.required])
    });
  }

  // this function to update the "cv" form field whenever a file is selected
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        transferSlip: file
      });
      document.getElementById('slipInputLabel').innerHTML = file.name;
    }
  }

}
