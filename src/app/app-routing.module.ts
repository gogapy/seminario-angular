import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlasadhmaidAboutComponent } from './blasadhmaid-about/blasadhmaid-about.component';
import { BlasadhmaidWhiskeysComponent } from './blasadhmaid-whiskeys/blasadhmaid-whiskeys.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'whiskeys',
    pathMatch: 'full',
  },
  {
    path: 'whiskeys',
    component: BlasadhmaidWhiskeysComponent,
  },
  {
    path: 'about',
    component: BlasadhmaidAboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
