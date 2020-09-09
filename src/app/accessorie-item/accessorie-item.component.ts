import {Component, OnInit} from '@angular/core';
import {Accessorie} from '../shared/models/accessorie.model';
import {ActivatedRoute} from '@angular/router';
import {AccessoriesStorageService} from '../shared/services/accessories-storage.service';

@Component({
  selector: 'app-accessorie-item',
  templateUrl: './accessorie-item.component.html',
  styleUrls: ['./accessorie-item.component.css']
})
export class AccessorieItemComponent implements OnInit {
  // this event is to tell the form component that quantity is changed
  // @Output() eventQuantityChanged: EventEmitter<number>;
  accessorie: Accessorie = null;
  showGallerie = false;
  isRated: boolean;
  ratings = 423;
  quantity = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private accessoriesStorageService: AccessoriesStorageService) {
  }

  ngOnInit() {
    this.starClicked(4);
    this.isRated = false;
    this.fetchAccessorieData();
  }

  getAccessoriesID(): string {
    return this.activatedRoute.snapshot.params.id;
  }

  fetchAccessorieData(): void {
    this.accessoriesStorageService.getOneAccessorie(this.getAccessoriesID()).subscribe((accessorie: any) => {
      this.accessorie = new Accessorie(
        accessorie.id,
        accessorie.name,
        accessorie.description,
        accessorie.isAvailable,
        accessorie.price,
        accessorie.imageURL.slice(),
        accessorie.createdAt,
        accessorie.updatedAt
      );
      this.showGallerie = true;
    });
  }

  starClicked(starNumber: number) {
    if (!this.isRated) {
      this.isRated = true;
      this.ratings++;
    }
    for (let i = 1; i < 6; i++) {
      const starID = 'star' + i;
      document.getElementById(starID).style.color = starNumber >= i ? '#fc0' : '#ccc';
    }
  }

  quantityPlus() {
    this.quantity++;
  }

  quantityMinus() {
    this.quantity > 1 ? this.quantity-- : this.quantity = 1;
  }

}
