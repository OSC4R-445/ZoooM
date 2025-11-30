import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagenUrl: string;  // Cambiamos a imagenUrl
  tipoEnvio?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Gaming Pro',
      precio: 1299.99,
      descripcion: 'Potencia extrema para los juegos más exigentes y tareas de alta demanda.',
      imagenUrl: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío gratis'
    },
    {
      id: 2,
      nombre: 'Cámara DSLR Profesional',
      precio: 1599.99,
      descripcion: 'Captura imágenes con calidad de estudio y video en 4K.',
      imagenUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío seguro'
    },
    {
      id: 3,
      nombre: 'TV 4K OLED 65"',
      precio: 1899.00,
      descripcion: 'Imágenes vibrantes y negros perfectos para una experiencia cinematográfica.',
      imagenUrl: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío especializado'
    },
    {
      id: 4,
      nombre: 'Drone Profesional',
      precio: 750.50,
      descripcion: 'Captura aérea con estabilidad y video de alta definición.',
      imagenUrl: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío seguro'
    },
    {
      id: 5,
      nombre: 'Bicicleta de Montaña Pro',
      precio: 1150.00,
      descripcion: 'Diseñada para los senderos más duros y el rendimiento máximo.',
      imagenUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Recogida en tienda'
    },
    {
      id: 6,
      nombre: 'Mouse Gaming RGB',
      precio: 45.99,
      descripcion: 'Precisión y velocidad para el jugador competitivo.',
      imagenUrl: 'https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío estándar'
    },
    {
      id: 7,
      nombre: 'Funda para Smartphone',
      precio: 19.99,
      descripcion: 'Protección elegante y duradera para tu dispositivo.',
      imagenUrl: 'https://images.pexels.com/photos/15860832/pexels-photo-15860832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío express'
    },
    {
      id: 8,
      nombre: 'Disco Duro Externo 1TB',
      precio: 89.90,
      descripcion: 'Almacenamiento masivo para backups y archivos multimedia.',
      imagenUrl: 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío gratis'
    },
    {
      id: 9,
      nombre: 'Taza de Café Programador',
      precio: 12.50,
      descripcion: 'La taza perfecta para tus sesiones de codificación nocturnas.',
      imagenUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío estándar'
    },
    {
      id: 10,
      nombre: 'Cable HDMI de Alta Velocidad',
      precio: 25.00,
      descripcion: 'Soporta resoluciones 4K a 60Hz para una imagen cristalina.',
      imagenUrl: 'https://images.pexels.com/photos/33693716/pexels-photo-33693716.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío express'
    }
  ];

  getProductos(): Producto[] {
    return this.productos;
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find(producto => producto.id === id);
  }
}