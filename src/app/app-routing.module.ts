import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradaComponent } from './shared/components/nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  { path: 'carrinho', loadChildren: () => import('./pages/carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./pages/contato/contato.module').then(m => m.ContatoModule) },
  { path: "**", component: NaoEncontradaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
