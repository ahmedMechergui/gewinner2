import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MoovobrainRequestsService} from '../../moovobrain-requests.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-test-individual',
  templateUrl: './test-individual.component.html',
  styleUrls: ['./test-individual.component.css']
})
export class TestIndividualComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  @Input() countries: string[];

  constructor(private moovobrainRequestsService: MoovobrainRequestsService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    // No validation added yet
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthday: new FormControl(null, [Validators.required]),
      country: new FormControl('', [this.countrySelected.bind(this), this.countryIsTunisia.bind(this)]),
      phone: new FormControl(null, [Validators.required, Validators.min(0), Validators.minLength(8)]),
      handicap: new FormControl(null, [Validators.required])
    });
  }

  countrySelected(control: FormControl): { [s: string]: boolean } {
    return control.value.length > 0 ? null : {s: true};
  }

  countryIsTunisia(control: FormControl): { [s: string]: boolean } {
    return control.value.toUpperCase() === 'TUNISIA' ? null : {isTunisia: true};
  }

  submitTest() {
    this.isLoading = true;
    const toastParams = {disableTimeOut: true, closeButton: true, positionClass: 'toast-bottom-right'};
    this.moovobrainRequestsService.applyForTest(this.form.value).subscribe(() => {
      this.isLoading = false;
      this.toaster.success('We will inform you once your request is validated', 'Test request submitted', toastParams);
    }, () => {
      this.isLoading = false;
      this.toaster.error('verify your information or try again later', 'ERROR :', toastParams);
    });
  }
}
