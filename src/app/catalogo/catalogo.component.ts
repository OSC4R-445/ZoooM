import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../services/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
  standalone: false
})
export class CatalogoComponent implements OnInit {
  mostrarCarrito = false;
  productos: Producto[] = [];
  productosCarrito: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }

  agregarAlCarrito(producto: Producto): void {
    this.productosCarrito.push({...producto});
    console.log('Producto agregado:', producto.nombre);
  }

  toggleCarrito(): void {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  eliminarDelCarrito(index: number): void {
    this.productosCarrito.splice(index, 1);
  }

  vaciarCarritoCompleto(): void {
    this.productosCarrito = [];
    console.log('Carrito vaciado completamente');
  }
}