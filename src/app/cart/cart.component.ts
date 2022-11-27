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

  cartList$!: Observable<Whiskey[]>;
  constructor(private cart: WhiskeyCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
