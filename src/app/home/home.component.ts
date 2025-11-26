import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  
  filasProductos: any[][] = [];
  
  productos: any[] = [
    {
      id: 1,
      nombre: 'Laptop Gaming Pro',
      precio: 1299.99,
      imagenUrl: 'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío gratis',
      descripcion: 'Potencia extrema para los juegos más exigentes y tareas de alta demanda.',
    },
    {
      id: 2,
      nombre: 'Cámara DSLR Profesional',
      precio: 1599.99,
      imagenUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío seguro',
      descripcion: 'Captura imágenes con calidad de estudio y video en 4K.',
    },
    {
      id: 3,
      nombre: 'TV 4K OLED 65"',
      precio: 1899.00,
      imagenUrl: 'https://images.pexels.com/photos/1827054/pexels-photo-1827054.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío especializado',
      descripcion: 'Imágenes vibrantes y negros perfectos para una experiencia cinematográfica.',
    },
    {
      id: 4,
      nombre: 'Drone Profesional',
      precio: 750.50,
      imagenUrl: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío seguro',
      descripcion: 'Captura aérea con estabilidad y video de alta definición.',
    },
    {
      id: 5,
      nombre: 'Bicicleta de Montaña Pro',
      precio: 1150.00,
      imagenUrl: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Recogida en tienda',
      descripcion: 'Diseñada para los senderos más duros y el rendimiento máximo.',
    },
    {
      id: 6,
      nombre: 'Mouse Gaming RGB',
      precio: 45.99,
      imagenUrl: 'https://images.pexels.com/photos/1486294/pexels-photo-1486294.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío estándar',
      descripcion: 'Precisión y velocidad para el jugador competitivo.',
    },
    {
      id: 7,
      nombre: 'Funda para Smartphone',
      precio: 19.99,
      imagenUrl: 'https://images.pexels.com/photos/15860832/pexels-photo-15860832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío express',
      descripcion: 'Protección elegante y duradera para tu dispositivo.',
    },
    {
      id: 8,
      nombre: 'Disco Duro Externo 1TB',
      precio: 89.90,
      imagenUrl: 'https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío gratis',
      descripcion: 'Almacenamiento masivo para backups y archivos multimedia.',
    },
    {
      id: 9,
      nombre: 'Taza de Café Programador',
      precio: 12.50,
      imagenUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío estándar',
      descripcion: 'La taza perfecta para tus sesiones de codificación nocturnas.',
    },
    {
      id: 10,
      nombre: 'Cable HDMI de Alta Velocidad',
      precio: 25.00,
      imagenUrl: 'https://images.pexels.com/photos/33693716/pexels-photo-33693716.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      tipoEnvio: 'Envío express',
      descripcion: 'Soporta resoluciones 4K a 60Hz para una imagen cristalina.',
    },
  ];

  ngOnInit() {
    this.filasProductos = this.obtenerFilasProductos();
  }

  obtenerFilasProductos(): any[][] {
    const filas = [];
    for (let i = 0; i < this.productos.length; i += 4) {
      filas.push(this.productos.slice(i, i + 4));
    }
    return filas;
  }
}