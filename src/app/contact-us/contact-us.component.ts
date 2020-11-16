import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../shared/services/host-url.service';
import {AuthService} from '../shared/authentication/auth.service';
import {take} from 'rxjs/operators';
import {Client} from '../shared/authentication/client.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {log} from 'util';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  client: Client = null;
  url = this.urlService.url;

  constructor(private authService: AuthService, private http: HttpClient, public urlService: HostURLService, private toast: ToastrService) {
  }

  ngOnInit() {
    this.initForm();
    this.getClient();
  }

  getClient() {
    this.authService.clientSubject.pipe(take(1)).subscribe((client: Client) => {
      this.client = client;
      this.patchForm();
    });
  }

  patchForm(): void {
    if (this.client) {
      this.form.patchValue({name: this.client.name, email: this.client.email});
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.client ? this.client.name : null, [Validators.required]),
      email: new FormControl(this.client ? this.client.email : null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }

  sendMessage(): void {
    this.isLoading = true;
    const toastParams = {
      positionClass: 'toast-bottom-right',
      disableTimeOut: false
    };
    this.http.post(this.url + '/contacts', this.form.value).subscribe(() => {
      this.isLoading = false;
      this.toast.success('Message sent successfully', 'Success', toastParams);
    }, error => {
      this.toast.error('Please verify your data', 'Error :', toastParams);
      this.isLoading = false;
    });
  }

}
