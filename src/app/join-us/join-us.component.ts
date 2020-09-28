import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from '../shared/services/host-url.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  form: FormGroup;
  url = this.urlService.url;
  isLoading = false;
  @ViewChild('cvInputElement', {static: true}) cvInputElement: HTMLLabelElement;

  constructor(private scriptLoader: ScriptsLoaderService,
              private renderer2: Renderer2,
              private http: HttpClient,
              private urlService: HostURLService,
              private toast: ToastrService
  ) {
  }

  ngOnInit() {
    this.loadUploaderScripts();
    this.setupForm();
  }

  setupForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      cv: new FormControl(null, [Validators.required]),
      applyType: new FormControl('job'),
      motivation: new FormControl(null)
    });
  }

  loadUploaderScripts() {
    this.scriptLoader.addScriptCDN(
      'https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.js',
      this.renderer2
    );
    this.scriptLoader.addScripts(this.renderer2, 'join-us-fileUpload');
  }


  sendRequest() {
// to send files we need to turn the form to formData
    const formData = new FormData();
    formData.append('cv', this.form.get('cv').value);
    formData.append('name', this.form.get('name').value);
    formData.append('email', this.form.get('email').value);
    formData.append('applyType', this.form.get('applyType').value);
    formData.append('motivation', this.form.get('motivation').value);

    this.isLoading = true;
    const toastParams = {
      positionClass: 'toast-bottom-right',
      disableTimeOut: false
    };
    this.http.post(this.url + '/join-us', formData).subscribe(() => {
      this.isLoading = false;
      this.toast.success('We will respond soon', 'Thanks for applying', toastParams);
    }, () => {
      this.isLoading = false;
      this.toast.error('Please try again later', 'ERROR :', toastParams);
    });
  }

  // this function to update the "cv" form field whenever a file is selected
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        cv: file
      });
      // this.cvInputElement.innerHTML = file.name;
    }
  }
}
