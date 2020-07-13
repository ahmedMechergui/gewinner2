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
    this.loadScripts();
    this.loadAccessories();
    this.loadAccessories();
  }

  loadScripts() {
    this.scriptsLoader.addScripts(this.renderer2, 'slick.min', 'accessories-carousel');
  }

  loadAccessories() {
    this.subscription = this.accessoriesStorageService.fetchAccessories().subscribe((accessoriesArray: Array<any>) => {

      accessoriesArray.forEach(x => {
        const accessorie = new Accessorie(x._id,
          x.name,
          x.description,
          x.isAvailable,
          x.price,
          x.imageURL.slice(),
          x.createdAt,
          x.updatedAt);
        this.accessories.push(accessorie);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
