import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HomeModule } from './home/home.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ContatoModule } from './contato/contato.module';



@NgModule({
  declarations: [
  ],

  imports: [
    HomeModule,
    CarrinhoModule,
    ContatoModule,
    CommonModule,
  ]
})
export class PagesModule { }
