import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';
import {Accessorie} from '../../shared/models/accessorie.model';
import {AccessoriesStorageService} from '../../shared/services/accessories-storage.service';
import {Subscription} from 'rxjs';
import {HostURLService} from '../../shared/services/host-url.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit, OnDestroy {

  subscription: Subscription = null;
  url = this.urlService.url;

  // accessories shall be added by admin dashboard
  accessories: Accessorie[] = [];

  constructor(private renderer2: Renderer2,
              private scriptsLoader: ScriptsLoaderService,
              private accessoriesStorageService: AccessoriesStorageService,
              public urlService: HostURLService
  ) {
  }


  ngOnInit() {
    this.loadAccessories();
  }

  loadScripts() {
    this.scriptsLoader.addManyScriptsAsync('assets/js/slick.min.js', 'assets/js/accessories-carousel.js').then();
  }

  loadAccessories() {
    this.subscription = this.accessoriesStorageService.fetchAccessories().subscribe((accessoriesArray: Array<any>) => {

      accessoriesArray.forEach(x => {
        const accessorie = new Accessorie(x.id,
          x.name,
          x.description,
          x.isAvailable,
          x.price,
          x.imageURL.slice(),
          x.createdAt,
          x.updatedAt);
        this.accessories.push(accessorie);
      });
      this.loadScripts();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
