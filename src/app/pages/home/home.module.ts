import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './HomePage/home.component';
import { CardsComponent } from 'src/app/shared/components/cards/cards.component';
import { HomeRoutingModule } from './HomePage/home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,

  ],
  exports:[
    HomeComponent,

  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
