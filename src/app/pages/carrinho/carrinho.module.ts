import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoRoutingModule } from './carrinho/carrinho-routing.module';



@NgModule({
  declarations: [
    CarrinhoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CarrinhoRoutingModule
  ]
})
export class CarrinhoModule { }
