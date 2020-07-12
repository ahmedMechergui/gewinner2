import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../shared/authentication/client.model';
import {AuthService} from '../../shared/authentication/auth.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  form: FormGroup;
  client: Client;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.initClientInfo();
    this.initForm();
  }

  initClientInfo(): void {
    this.authService.clientSubject.pipe(take(1)).subscribe(client => {
      this.client = client;
    });
  }

  initForm(): void {
    this.form = new FormGroup({
      clientID: new FormControl({value: this.client.clientID, disabled: true}, [Validators.required]),
      email: new FormControl(this.client.email, [Validators.required, Validators.email]),
      name: new FormControl(this.client.name, [Validators.required]),
      phone: new FormControl(this.client.phone, [Validators.minLength(8)]),
      oldPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    window.alert('Account settings will be implemented later with nodejs.');
  }

}
