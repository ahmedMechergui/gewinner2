import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostURLService} from './host-url.service';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesStorageService {
  url = this.urlService.url;

  constructor(private http: HttpClient, private urlService: HostURLService) {
  }

  fetchAccessories() {
    return this.http.get(this.url + '/accessories');
  }

  getOneAccessorie(id: string) {
    return this.http.get(this.url + '/accessories/' + id);
  }

  orderAccessorie(orderForm: FormGroup, quantity: number, unitPrice: number, accessorieName: string, accessorieID: string) {
    const totalPrice = unitPrice * quantity;
    this.cleanObject(orderForm.value);
    return this.http.post(this.url + '/accessories-order', {
      ...orderForm.value,
      quantity,
      unitPrice,
      totalPrice,
      accessorieName,
      accessorieID
    });
  }

  /*
  this function removes null properties from the object
  in our case either individual or organization fields
  are null so we don't need to send them the server
  we pass reference in parameter so we don't have to return anything
   */
  cleanObject(obj) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
        delete obj[propName];
      }
    }
  }
}
