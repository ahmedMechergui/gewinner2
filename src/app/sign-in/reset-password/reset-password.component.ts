import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../../shared/services/host-url.service';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  password = '';
  url = this.urlService.url;
  isLoading = true;
  isError = false;

  constructor(private http: HttpClient,
              private urlService: HostURLService,
              private activatedRoute: ActivatedRoute,
              private toaster: ToastrService) {
  }

  ngOnInit() {
    this.requestNewPassword();
  }

  requestNewPassword() {
    this.isError = false;
    const id = this.activatedRoute.snapshot.params.id;
    this.http.get(this.url + '/clients/reset/' + id).subscribe((response: any) => {
      this.isLoading = false;
      this.password = response.newPassword;
    }, () => {
      this.isError = true;
      this.isLoading = false;
      this.toaster.error('Your reset token is probably expired\ntry sending a reset email again',
        'Error :',
        {
          positionClass: 'toast-bottom-right',
          disableTimeOut: true,
          closeButton: true
        });
    });
  }

}
