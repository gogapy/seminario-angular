import { Injectable } from '@angular/core';
import { Whiskey } from './whiskey-list/Whiskey';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhiskeyCartService {

  private _cartList: Whiskey[] = [];
  cartList: BehaviorSubject<Whiskey[]> = new BehaviorSubject(this._cartList);

  constructor() {

  }

  addToCart(whiskey: Whiskey) {
    let item: Whiskey = this._cartList.find((v1) => v1.name == whiskey.name)!;
    if(!item) {
      this._cartList.push({ ... whiskey});
    }
    else {
      item.quantity += whiskey.quantity;
    }
    console.log(this.cartList);
    this.cartList.next(this._cartList); // equivalente al emitt de eventos
  }

}
