import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BrowserDetectorService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }

  isOnBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
