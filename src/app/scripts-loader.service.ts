import {Inject, Injectable, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScriptsLoaderService {

  // tslint:disable-next-line:variable-name
  constructor(@Inject(DOCUMENT) private _document) {
  }

// a renderer2 must be created at the component to access its DOM
  addScriptCDN(LinkCDN: string, renderer2: Renderer2) {
    const s = renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = LinkCDN;
    s.text = ``;
    renderer2.appendChild(this._document.body, s);
  }

// a renderer2 must be created at the component to access its DOM
  addScripts(renderer2: Renderer2, ...scriptsNames: string[]) {
    scriptsNames.forEach((scriptName: string) => {
      const s = renderer2.createElement('script');
      s.type = 'text/javascript';
      s.src = '../assets/js/' + scriptName + '.js';
      s.text = ``;
      renderer2.appendChild(this._document.body, s);
    });
  }
}
