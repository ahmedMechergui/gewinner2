import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../../scripts-loader.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css']
})
export class FormOrderComponent implements OnInit {
  form: FormGroup;
  trainingSessionCheckbox = false;
  controlCheckbox = false;
  moreYearsRadio = false;
  controlMorePrice = 7600;
  clientNature = 0;
  // this doesn't include the services , it shall not be presented alone to user
  purchasePrice = 15000;
  // training price and control price is hold in its own variable and method because radio buttons are causing problems since
  // they don't consider uncheck as a change event
  trainingPrice = 0;
  controlPrice = 0;
  // when disabling training session or quarterly control , this variable will hold the old price value
  // in case the user enables it again
  trainingPriceBeforeDisabling = 0;
  controlPriceBeforeDisabling = 0;

  constructor(private renderer2: Renderer2, private scriptsLoader: ScriptsLoaderService) {
  }

  ngOnInit() {
    this.loadScript();
    this.formInit();
  }

  formInit() {
    this.form = new FormGroup({
      // Wheelchair
      steeringSystem: new FormControl({value: true, disabled: true}),
      headset: new FormControl({value: true, disabled: true}),
      wheelchair: new FormControl({value: true, disabled: true}),
      mobileApp: new FormControl({value: true, disabled: true}),
      // Safety
      obstacleDetection: new FormControl({value: true, disabled: true}),
      camera: new FormControl(false),
      gps: new FormControl(false),
      notifications: new FormControl(false),
      sms: new FormControl(false),
      //  Accessories
      securityBelt: new FormControl({value: true, disabled: true}),
      headrest: new FormControl({value: true, disabled: true}),
      mirror: new FormControl(false),
      table: new FormControl(false),
      rearCamera: new FormControl(false),
      // Services
      trainingSession: new FormControl(false),
      trainingHours: new FormControl({value: null, disabled: true}),
      control: new FormControl(false),
      controlYears: new FormControl({value: null, disabled: true}),
      demo: new FormControl({value: true, disabled: true}),
      // Client Nature , individual or organisation
      clientNature: new FormControl(''),
      //  Individuals form
      iName: new FormControl(null, [Validators.required]),
      iEmail: new FormControl(null, [Validators.required, Validators.email]),
      iBirthday: new FormControl(null, [Validators.required]),
      iCountry: new FormControl('', [this.countrySelected.bind(this)]),
      iPhone: new FormControl(null, [Validators.required, Validators.min(0), Validators.minLength(8)]),
      iHandicap: new FormControl(null, [Validators.required]),
      //  Organisation form
      oName: new FormControl(null, [Validators.required]),
      oType: new FormControl(null, [Validators.required]),
      oSector: new FormControl(null, [Validators.required]),
      oRegistrationNumber: new FormControl(null, [Validators.required]),
      oResponsibleName: new FormControl(null, [Validators.required]),
      oHandicap: new FormControl(null, [Validators.required]),
      oCountry: new FormControl('', [this.countrySelected.bind(this)]),
      oPhone: new FormControl(null, [Validators.required, Validators.min(0), Validators.minLength(8)]),
      oEmail: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  loadScript() {
    this.scriptsLoader.addScripts(this.renderer2, 'form-order');
  }

  trainingClicked() {
    this.trainingSessionCheckbox = !this.trainingSessionCheckbox;

    if (this.trainingSessionCheckbox) {
      this.form.get('trainingHours').enable();
      this.trainingPrice = this.trainingPriceBeforeDisabling;
    } else {
      this.trainingPriceBeforeDisabling = this.trainingPrice;
      this.trainingPrice = 0;
      this.form.get('trainingHours').disable();
    }
  }

  controlClicked() {
    this.controlCheckbox = !this.controlCheckbox;

    if (this.controlCheckbox) {
      this.form.get('controlYears').enable();
      this.controlPrice = this.controlPriceBeforeDisabling;
    } else {
      this.controlPriceBeforeDisabling = this.controlPrice;
      this.controlPrice = 0;
      this.form.get('controlYears').disable();
    }
  }

  moreYearsClicked(isMoreYears: boolean) {
    this.moreYearsRadio = isMoreYears;
  }

  calculateControlPrice(addedYears: number) {
    this.controlMorePrice = 4000 + 3600 * (addedYears - 2);
    this.controlPrice = this.controlMorePrice;
  }

  changeClientNature(clientNature: number) {
    this.clientNature = clientNature;
  }

  countrySelected(control: FormControl): { [s: string]: boolean } {
    return control.value.length > 0 ? null : {s: true};
  }

  alert() {
    alert('function not implemented yet , waiting for nodejs integration');
  }

  priceUpdate(event: Event, price: number) {
    const checked = event.target.checked;
    this.purchasePrice += checked ? price : -price;
  }

  trainingRadioSelected(event: Event, price: number) {
    this.trainingPrice = price;
  }

  controlRadioSelected(event: Event, price: number) {
    this.controlPrice = price;
  }
}
