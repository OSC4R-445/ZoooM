import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService, Producto } from '../services/productos.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss'],
  standalone: false,
})
export class DescripcionComponent implements OnInit {
  productoId: number | null = null;
  producto: Producto | null = null;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productoId = Number(params.get('id'));
      this.cargarProducto(this.productoId);
    });
  }

  cargarProducto(id: number) {
    this.producto = this.productosService.getProductoById(id) || null;
  }
}