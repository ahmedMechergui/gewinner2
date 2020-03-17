import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  form: FormGroup;

  constructor(private scriptLoader: ScriptsLoaderService, private renderer2: Renderer2) {
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


  onSubmit() {
    alert('User interface not interacting with a back-end yet.');
  }

}
