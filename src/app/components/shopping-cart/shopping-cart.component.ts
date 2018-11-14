import { Usuario } from '../../domain/usuario';
import { Producto } from '../../domain/producto';
import { ShoppingCart } from '../../domain/shoppingCart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ShoppingCartService]
})

export class ShoppingCartComponent implements OnInit {

  usuario: Usuario
  shoppingCart: ShoppingCart
  productos: Producto[]
  errorMessage = ""

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) {
  }

  async ngOnInit() {
    try {
      const productos = await this.shoppingCartService.getProductos()
      this.shoppingCart = new ShoppingCart(productos)
      this.usuario = await this.shoppingCartService.getUsuarioLogueado()
    } catch (e) {
      this.errorMessage = e
    }
  }

  agregarProducto(producto) {
    this.usuario.shoppingCart.agregarProducto(producto)
  }

  quitarProducto(producto) {
    this.usuario.shoppingCart.quitarProducto(producto)
  }

  finalizarCompra(){
    try{
      this.validarCompra()
      this.navegarPedidoFinalizado()
      this.restarSaldo()
      this.agregarPedido(this.usuario.shoppingCart)
    }catch(error){
    this.errorMessage = error
    }
   }
    validarCompra(){
      if(this.usuario.saldo < this.usuario.shoppingCart.getTotal())
        throw ("No tiene saldo suficiente")
    }

    navegarPedidoFinalizado(){
      this.router.navigate(['/pedido-finalizado'])
    }
    restarSaldo(){
      this.usuario.saldo = this.usuario.saldo - this.usuario.shoppingCart.getTotal()
    }
}
