import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
/*
import {} from 'ngx-mask';
 */
import { ContatoComponent } from './contato/contato.component';
import { ContatoRoutingModule } from './contato/contato-routing.module';



@NgModule({
  declarations: [
    ContatoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContatoRoutingModule,

  ]
})
export class ContatoModule { }
