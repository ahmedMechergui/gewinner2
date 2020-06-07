import {Component, OnInit, Renderer2} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ScriptsLoaderService} from '../../scripts-loader.service';

@Component({
  selector: 'app-form-accessorie-order',
  templateUrl: './form-accessorie-order.component.html',
  styleUrls: ['./form-accessorie-order.component.css']
})
export class FormAccessorieOrderComponent implements OnInit {
  form: FormGroup;
  clientNature = 'none';

  constructor(private scriptsLoader: ScriptsLoaderService, private  renderer2: Renderer2) {
  }

  ngOnInit() {
    this.loadScriptForm();
    this.formInit();
  }


  formInit() {
    this.form = new FormGroup({
      // Client Nature , individual or organisation
      clientNature: new FormControl(''),
      //  Individuals form
      iName: new FormControl(null, [Validators.required]),
      iEmail: new FormControl(null, [Validators.required, Validators.email]),
      iBirthday: new FormControl(null, [Validators.required]),
      iCountry: new FormControl('', [Validators.required]),
      iState: new FormControl('', [Validators.required]),
      iAddress: new FormControl(null, [Validators.required]),
      iZipCode: new FormControl(null, [Validators.required]),
      iPhone: new FormControl(null, [Validators.required, Validators.min(0), Validators.minLength(8)]),
      iHandicap: new FormControl(null),
      //  Organisation form
      oName: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      oType: new FormControl(null, [Validators.required]),
      oSector: new FormControl(null, [Validators.required]),
      oCountry: new FormControl('', [Validators.required]),
      oState: new FormControl('', [Validators.required]),
      oRegistrationNumber: new FormControl(null, [Validators.required]),
      oResponsibleName: new FormControl(null, [Validators.required]),
      oHandicap: new FormControl(null, [Validators.required]),
      // oCountry: new FormControl('', [this.countrySelected.bind(this)]),
      oAddress: new FormControl(null, [Validators.required]),
      oZipCode: new FormControl(null, [Validators.required]),
      oPhone: new FormControl(null, [Validators.required, Validators.min(0), Validators.minLength(8)]),
      oEmail: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  loadScriptForm() {
    this.scriptsLoader.addScripts(this.renderer2, 'form-order');
    console.log('scripts loaded');
  }

  loadScriptCountryState() {
    this.scriptsLoader.addScripts(this.renderer2, 'countrystate');
  }


  changeClientNature(clientNature: string) {
    this.clientNature = clientNature;
    this.loadScriptCountryState();
  }

  alert() {
    // this.form does not show disabled controls so we use this.form.getRawValue();
    console.log(this.form.getRawValue());
    alert('function not implemented yet , waiting for nodejs integration');
  }


}
