import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { CardsComponent } from './components/cards/cards.component';
import { RouterModule } from '@angular/router';
import { NaoEncontradaComponent } from './components/nao-encontrada/nao-encontrada.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BarraPesquisaComponent,
    CardsComponent,
    NaoEncontradaComponent,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    NaoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
