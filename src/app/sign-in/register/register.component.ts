import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      country: new FormControl('',[Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    window.alert('Login system will be implemented later with nodejs.');
  }

}
