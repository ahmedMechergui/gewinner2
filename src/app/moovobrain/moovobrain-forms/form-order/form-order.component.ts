import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../../scripts-loader.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MoovobrainRequestsService} from '../../moovobrain-requests.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css']
})
export class FormOrderComponent implements OnInit {
  @Input() countries: string[];
  form: FormGroup;
  isLoading = false;
  trainingSessionCheckbox = false;
  controlCheckbox = false;
  moreYearsRadio = false;
  controlMorePrice = 0;
  clientNature = 'none';
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

  constructor(private renderer2: Renderer2,
              private scriptsLoader: ScriptsLoaderService,
              private moovobrainRequestsService: MoovobrainRequestsService,
              private toast: ToastrService) {
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
      controlYearsAdded: new FormControl(),
      demo: new FormControl({value: true, disabled: true}),
      // Client Nature , individual or organisation
      clientNature: new FormControl(''),
      //  Individuals form
      iName: new FormControl('', [Validators.required]),
      iEmail: new FormControl('', [Validators.required, Validators.email]),
      iBirthday: new FormControl(null, [Validators.required]),
      // iCountry: new FormControl('', [this.countrySelected.bind(this)]),
      iAddress: new FormControl('', [Validators.required]),
      iZipCode: new FormControl('', [Validators.required]),
      iPhone: new FormControl('', [Validators.required, Validators.min(0), Validators.minLength(8)]),
      iHandicap: new FormControl('', [Validators.required]),
      //  Organisation form
      oName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]),
      oType: new FormControl('', [Validators.required]),
      oSector: new FormControl('', [Validators.required]),
      oRegistrationNumber: new FormControl('', [Validators.required]),
      oResponsibleName: new FormControl('', [Validators.required]),
      oHandicap: new FormControl('', [Validators.required]),
      // oCountry: new FormControl('', [this.countrySelected.bind(this)]),
      oAddress: new FormControl('', [Validators.required]),
      oZipCode: new FormControl('', [Validators.required]),
      oPhone: new FormControl('', [Validators.required, Validators.min(0), Validators.minLength(8)]),
      oEmail: new FormControl('', [Validators.required, Validators.email])
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
    addedYears === 0 ? this.controlMorePrice = 0 : this.controlMorePrice = 4000 + 3600 * (addedYears - 2);
    this.controlPrice = this.controlMorePrice;
  }

  changeClientNature(clientNature: string) {
    this.clientNature = clientNature;
  }

  // countrySelected(control: FormControl): { [s: string]: boolean } {
  //   return control.value.length > 0 ? null : {s: true};
  // }

  alert() {
    // this.form does not show disabled controls so we use this.form.getRawValue();
    console.log(this.form.getRawValue());
    alert('function not implemented yet , waiting for nodejs integration');
  }

  priceUpdate(event: Event, price: number) {
    // @ts-ignore
    const checked = event.target.checked;
    this.purchasePrice += checked ? price : -price;
  }

  trainingRadioSelected(event: Event, price: number) {
    this.trainingPrice = price;
  }

  controlRadioSelected(event: Event, price: number) {
    this.controlPrice = price;
  }

  orderMoovobrain() {
    this.isLoading = true;
    const toastParams = {disableTimeOut: true, closeButton: true, positionClass: 'toast-bottom-right'};
    this.moovobrainRequestsService.orderMoovobrain(this.form.value).subscribe(response => {
      this.isLoading = false;
      this.toast.success('We will inform you once your order is validated', 'Order submitted', toastParams);
    }, error => {
      console.log(error);
      this.isLoading = false;
      this.toast.error('verify your information or try again later', 'ERROR :', toastParams);
    });
  }
}
