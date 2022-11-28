import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { WhiskeyCartService } from '../whiskey-cart.service';
import { Whiskey } from '../whiskey-list/Whiskey';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList: Whiskey[] = [];

  constructor(private cart: WhiskeyCartService) {
    // observe the complete cartList from it service
    cart.cartList.subscribe(observable => {
      this.cartList = observable;
    });
  }

  ngOnInit(): void {
  }

  totalPrice(): number {
    let totalPrice = 0;

    if(this.cartList) {
      for(const whiskey of this.cartList) {
        totalPrice = totalPrice + (whiskey.price * whiskey.quantity);
        // ex:
        // 0 = 0 + (23 * 2) -\ *first add*
        // 46 = 46 + (15 * 4) -\ *second add*
        // total = $106.00 -\ *total*
      }
    }
    return totalPrice;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}

//         //\\
//        //  \\
//        | ֎ ֎\
//        \  o /
//         \__/
