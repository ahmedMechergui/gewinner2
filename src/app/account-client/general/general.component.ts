import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../shared/authentication/client.model';
import {AuthService} from '../../shared/authentication/auth.service';
import {take} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../../shared/services/host-url.service';
import {AuthResponse} from '../../shared/authentication/auth-response';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  form: FormGroup;
  client: Client;
  url = this.urlService.url;
  isLoading= false;

  constructor(private authService: AuthService,
              private http: HttpClient,
              public urlService: HostURLService,
              private toast: ToastrService
  ) {
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
      phone: new FormControl(this.client.phone),
      oldPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      newPassword: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    this.submitChanges();
  }

  submitChanges(): void {
    const value = this.form.value;
    const password = value.newPassword && value.oldPassword ? value.newPassword : null;
    const oldPassword = value.newPassword && value.oldPassword ? value.oldPassword : null;

    const updates = {
      name: value.name,
      email: value.email,
      phone: value.phone,
      password,
      oldPassword
    };
    this.updateClient(updates);
  }

  updateClient(client) {
    const toastParams = {
      positionClass: 'toast-bottom-right',
      disableTimeOut: false
    };
    this.isLoading = true;
    this.http.put(this.url + '/clients', client).subscribe((updatedClient: AuthResponse) => {
      this.isLoading = false;
      this.toast.success('Your account was updated successfully', 'Success', toastParams);
      this.authService.updateClient(updatedClient);
    }, () => {
      this.isLoading = false;
      this.toast.error('Please verify you data', 'Error :', toastParams);
    });
  }

}
