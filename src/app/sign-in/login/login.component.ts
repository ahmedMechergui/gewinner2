import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isLoading = false;
  isError = false;
  isError2 = false;
  signInSubscription: Subscription = null;

  constructor(private authService: AuthService) {
  }


  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.isError = false;
    this.signInSubscription = this.authService.signIn(this.form.value).subscribe(responseData => {
      this.isLoading = false;
      this.authService.createClient(responseData);
      this.authService.redirectToServices();
    }, error => {
      this.isLoading = false;
      this.isError = true;
      this.isError2 = true;
      this.form.patchValue({password: ''});
    });
  }

  ngOnDestroy(): void {
    if (this.signInSubscription) {
      this.signInSubscription.unsubscribe();
    }
  }
}

