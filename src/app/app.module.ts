import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhiskeyListComponent } from './whiskey-list/whiskey-list.component';

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { BlasadhmaidAboutComponent } from './blasadhmaid-about/blasadhmaid-about.component';
import { BlasadhmaidWhiskeysComponent } from './blasadhmaid-whiskeys/blasadhmaid-whiskeys.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiskeyListComponent,
    BlasadhmaidAboutComponent,
    BlasadhmaidWhiskeysComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
