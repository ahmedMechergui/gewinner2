import {Component, Input, OnInit, Renderer2} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ScriptsLoaderService} from '../../scripts-loader.service';
import {AccessoriesStorageService} from '../../shared/services/accessories-storage.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-form-accessorie-order',
  templateUrl: './form-accessorie-order.component.html',
  styleUrls: ['./form-accessorie-order.component.css']
})
export class FormAccessorieOrderComponent implements OnInit {
  form: FormGroup;
  // if this variable indicated that the user already submitted the order so he can't submit
  // the same order twice
  orderSubmitted = false;

  clientNature = 'none';
  // the quantity is passed as an array so we get reference instead of value and detect changes from parent component
  @Input() quantity;

  @Input() price: number;
  @Input() accessorieName: string;
  isLoading = false;

  constructor(private scriptsLoader: ScriptsLoaderService,
              private  renderer2: Renderer2,
              private httpRequests: AccessoriesStorageService,
              private toaster: ToastrService
  ) {
  }

  ngOnInit() {
    this.loadScriptForm();
    this.formInit();
    // this.price = 198;
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
      oAddress: new FormControl(null, [Validators.required]),
      oZipCode: new FormControl(null, [Validators.required]),
      oPhone: new FormControl(null, [Validators.required, Validators.min(0), Validators.minLength(8)]),
      oEmail: new FormControl(null, [Validators.required, Validators.email])
    });
  }

  loadScriptForm() {
    this.scriptsLoader.addScripts(this.renderer2, 'form-order');
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

    // add quantity,totalPrice and unitPrice to the post request => follow on postman request
    console.log(this.form.getRawValue());
    alert('function not implemented yet , waiting for nodejs integration');
  }

  submitOrder() {
    const toasterParams = {
      positionClass: 'toast-bottom-right',
      disableTimeOut: false,
      closeButton: true
    };
    this.isLoading = true;
    this.httpRequests.orderAccessorie(this.form, this.quantity[0], this.price, this.accessorieName).subscribe(() => {
      this.toaster.success('You will be getting a confirmation email soon', 'Order submitted', toasterParams);
      this.orderSubmitted = true;
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.toaster.error('Unable to submit your order', 'Error :', toasterParams);
      this.isLoading = false;
    });
  }

}
