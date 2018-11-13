import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component'
import {PedidoFinalizadoComponent} from 'src/app/components/pedido-finalizado/pedido-finalizado.component'

const routes: Routes = [
  { path: '', redirectTo: '/shopping-cart', pathMatch: 'full' },
  { path: 'shopping-cart', component: ShoppingCartComponent },
{ path: 'pedido-finalizado', component: PedidoFinalizadoComponent }];
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ShoppingCartComponent, PedidoFinalizadoComponent ]