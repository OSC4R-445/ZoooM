import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
  standalone: false
})
export class CarritoComponent {
  @Input() productos: Producto[] = [];
  @Output() eliminarProducto = new EventEmitter<number>();
  @Output() vaciarCarritoEvent = new EventEmitter<void>();

  calcularTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  eliminarProductoDelCarrito(index: number): void {
    this.eliminarProducto.emit(index);
  }

  vaciarCarrito(): void {
    this.vaciarCarritoEvent.emit();
  }
}