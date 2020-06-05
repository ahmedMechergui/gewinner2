import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      clientID: new FormControl({value : '11414118' , disabled : true}, [Validators.required]),
      email: new FormControl('ahmed.michrgui@hotmail.fr', [Validators.required, Validators.email]),
      name: new FormControl('Ahmed Mechergui', [Validators.required]),
      phone: new FormControl('50280853', [Validators.minLength(8)]),
      oldPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    window.alert('Account settings will be implemented later with nodejs.');
  }

}
