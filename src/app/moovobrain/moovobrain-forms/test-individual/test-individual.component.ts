import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test-individual',
  templateUrl: './test-individual.component.html',
  styleUrls: ['./test-individual.component.css']
})
export class TestIndividualComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    // No validation added yet
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      birthday: new FormControl(null, [Validators.required]),
      country: new FormControl('', [this.countrySelected.bind(this)]),
      phone: new FormControl(null, [Validators.required, Validators.min(0), Validators.minLength(8)]),
      handicap: new FormControl(null, [Validators.required])
    });
  }

  countrySelected(control: FormControl): { [s: string]: boolean } {
    return control.value.length > 0 ? null : {s: true};
  }

  alert() {
    alert('function not implemented yet , waiting for nodejs integration');
  }
}
