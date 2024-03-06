import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  itemsPerPage: number = 2; // Cantidad de elementos por página
  currentPage: number = 1; // Página actual
  totalItems: number = 100; // Total de elementos en la lista (ejemplo)
  items: any[] = []; // Lista de elementos
  itemsForPage: any[] = []; // Elementos de la página actual

  constructor() {
    // Aquí podrías cargar la lista de elementos desde una API o cualquier otra fuente de datos
    this.loadItems();
  }

  // Esta función maneja el evento de cambio de página del componente de paginación
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    // Aquí puedes cargar los elementos de la nueva página
    this.loadItemsForPage(pageNumber);
  }

  loadItems(): void {
    // Suponiendo que obtienes los datos de una API o cualquier otra fuente de datos
    // Aquí simulamos una lista de elementos obtenidos de una API
    this.items = [
      { id: 1, name: 'Elemento 1' },
      { id: 2, name: 'Elemento 2' },
      { id: 3, name: 'Elemento 3' },
      { id: 4, name: 'Elemento 4' },
      { id: 5, name: 'Elemento 5' },
      { id: 6, name: 'Elemento 6' },
      { id: 7, name: 'Elemento 7' },
      { id: 8, name: 'Elemento 8' },
      { id: 9, name: 'Elemento 9' },
      { id: 10, name: 'Elemento 10' },
      { id: 11, name: 'Elemento 11' },
      // Puedes agregar más elementos si es necesario
    ];
    this.totalItems = this.items.length;
    // Después de cargar los elementos, también cargamos los elementos para la primera página
    this.loadItemsForPage(this.currentPage);
  }

  loadItemsForPage(pageNumber: number): void {
    // Lógica para cargar los elementos de la página especificada
    // Por ejemplo, puedes calcular el índice de inicio y fin y extraer los elementos de la lista original
    const startIndex = (pageNumber - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
    this.itemsForPage = this.items.slice(startIndex, endIndex);
  }
}
