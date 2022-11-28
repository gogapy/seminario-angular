import { Component, OnInit } from '@angular/core';
import { WhiskeyCartService } from '../whiskey-cart.service';
import { WhiskeyDataService } from '../whiskey-data.service';
import { Whiskey } from './Whiskey';

@Component({
  selector: 'app-whiskey-list',
  templateUrl: './whiskey-list.component.html',
  styleUrls: ['./whiskey-list.component.scss']
})
export class WhiskeyListComponent implements OnInit {

  whiskeys: Whiskey[] = [];

  constructor(
    private cart: WhiskeyCartService,
    private whiskeysDataService: WhiskeyDataService) {
  }

  ngOnInit(): void {
    this.whiskeysDataService.getAll().subscribe(whiskeys => this.whiskeys = whiskeys)

  }

  addToCart(whiskey: any) {
    if(whiskey.quantity != 0) {
    this.cart.addToCart(whiskey);
    whiskey.stock -= whiskey.quantity;
    whiskey.quantity = 0;
    }
  }

  maxReached(m: string) {
    alert(m);
  }

}
