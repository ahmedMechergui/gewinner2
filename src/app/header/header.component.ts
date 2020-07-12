import {Component, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../scripts-loader.service';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;

  constructor(private renderer2: Renderer2,
              private scriptLoader: ScriptsLoaderService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.loadScripts();
    this.authService.clientSubject.subscribe(client => {
      this.isAuthenticated = !!client;
    });
  }

  loadScripts() {
    this.scriptLoader.addScripts(this.renderer2, 'header');
  }

}
