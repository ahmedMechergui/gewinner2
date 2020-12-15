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
  // this attribute ensures that the user only submits the order once , then we deactivate the order button
  isOrderAlreadySubmitted = false;
  clientNature = 'none';
  // this doesn't include the services , it shall not be presented alone to user
  purchasePrice = 5900;

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
      quantity: new FormControl(1, [Validators.min(1)]),
      // Wheelchair
      steeringSystem: new FormControl({value: true, disabled: true}),
      wheelchair: new FormControl({value: true, disabled: true}),
      microphone: new FormControl({value: true, disabled: true}),
      smartDisplay: new FormControl({value: true, disabled: true}),
      // Safety
      speakerDependentTechnology: new FormControl({value: true, disabled: true}),
      geolocationApp: new FormControl({value: true, disabled: true}),
      //  Accessories
      securityBelt: new FormControl({value: true, disabled: true}),
      headrest: new FormControl({value: true, disabled: true}),

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
      oHandicap: new FormControl(''),
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

  changeClientNature(clientNature: string) {
    this.clientNature = clientNature;
  }


  priceUpdate(event: Event, price: number) {
    // @ts-ignore
    const checked = event.target.checked;
    this.purchasePrice += checked ? price : -price;
  }


  orderMoovobrain() {
    this.isLoading = true;
    const toastParams = {
      disableTimeOut: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      enableHtml: true
    };
    const purchasePrice = (this.purchasePrice - 200) * this.form.get('quantity').value;
    this.moovobrainRequestsService.orderMoovobrain(this.form.getRawValue(), purchasePrice).subscribe(() => {
      this.isLoading = false;
      this.isOrderAlreadySubmitted = true;
      this.toast.success(
        'Check your email for bank transfer instructions.<br>PS: you might find our email in the <strong>spam</strong> folder',
        'We will get back to you soon', toastParams);
    }, () => {
      this.isLoading = false;
      this.toast.error('verify your information or try again later', 'ERROR :', toastParams);
    });
  }
}
