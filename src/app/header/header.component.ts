import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';
import {AuthService} from '../shared/authentication/auth.service';
import {ToastrService} from 'ngx-toastr';
import {BrowserDetectorService} from '../shared/services/browser-detector.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private renderer2: Renderer2,
              private scriptLoader: ScriptsLoaderService,
              private authService: AuthService,
              private toaster: ToastrService,
              private browserDetector: BrowserDetectorService) {
  }

  ngOnInit() {
    this.loadScripts();
    this.authService.clientSubject.subscribe(client => {
      this.isAuthenticated = !!client;
    });
    if (this.browserDetector.isOnBrowser()) {
      this.showDemoToaster();
    }
  }

  loadScripts() {
    this.scriptLoader.addScripts(this.renderer2, 'header');
  }

  showDemoToaster(): void {
    // tslint:disable-next-line:max-line-length
    this.toaster.info('<p class="text-nowrap">This version is only for <strong>demo</strong> purposes.<br>Feel free to perform updates</p>', 'Note :', {
      positionClass: 'toast-top-left',
      disableTimeOut: true,
      enableHtml: true,
      closeButton: true
    });
  }

}
