import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Whiskey } from '../whiskey-list/Whiskey';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  MaxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else {
      this.MaxReached.emit("Max")
    }
  }

  downQuantity(): void {
    if(this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  // changeQuantity(event, whiskey: Whiskey): void {
  //   console.log(event.target);
  //   this.quantityChange.emit(this.quantity);
  // }

}
