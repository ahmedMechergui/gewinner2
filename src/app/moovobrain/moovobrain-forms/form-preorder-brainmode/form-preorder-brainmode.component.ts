import {Component, OnInit, Renderer2} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ScriptsLoaderService} from '../../../scripts-loader.service';
import {MoovobrainRequestsService} from '../../moovobrain-requests.service';
import {ToastService} from '../../../shared/services/tost.service';

@Component({
  selector: 'app-form-preorder-brainmode',
  templateUrl: './form-preorder-brainmode.component.html',
  styleUrls: ['./form-preorder-brainmode.component.css', '../form-order/form-order.component.css']
})
export class FormPreorderBrainmodeComponent implements OnInit {
  clientNature = 'none';
  form: FormGroup;
  isLoading = false;
  isAlreadyPreordered = false;

  constructor(private scriptsLoader: ScriptsLoaderService,
              private  renderer2: Renderer2,
              private httpRequests: MoovobrainRequestsService,
              private toaster: ToastService) {
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.form = new FormGroup({
      quantity: new FormControl(1, [Validators.min(1)]),
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

  loadScriptCountryState() {
    this.scriptsLoader.addScripts(this.renderer2, 'countrystate');
  }

  changeClientNature(clientNature: string) {
    this.clientNature = clientNature;
    this.loadScriptCountryState();
  }

  preOrderMoovobrainBrainMode(): void {
    this.isLoading = true;
    this.httpRequests.preOrderMoovobrain(this.form).subscribe(() => {
      this.isLoading = false;
      this.isAlreadyPreordered = true;
      this.toaster.success('We will inform you once brain mode is lunched', 'Pre-order submitted');
    }, () => {
      this.isLoading = false;
      this.toaster.error('verify your information or try again later!', 'ERROR : ');
    });
  }

}
