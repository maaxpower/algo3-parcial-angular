import { Usuario } from '../../domain/usuario';
import { Producto } from '../../domain/producto';
import { ShoppingCart } from '../../domain/shoppingCart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

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

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    const productos = this.shoppingCartService.getProductos()
    this.shoppingCart = new ShoppingCart(productos)
    this.usuario = this.shoppingCartService.getUsuarioLogueado()
  }
  agregarProducto(producto){
    this.usuario.shoppingCart.agregarProducto(producto)
  }
  quitarProducto(producto){
    this.usuario.shoppingCart.quitarProducto(producto)
  }
}
