import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.css'],
})
export class CustomPaginationComponent {
  @Input() currentPage: number;
  @Input() itemsPerPage: number;
  @Input() totalItems: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  onPageChange(pageNumber: number): void {
    this.pageChange.emit(pageNumber);
  }

  onNextClick(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  onPreviousClick(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  onNextGroupClick(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    const nextPage = Math.min(this.currentPage + 5, totalPages);
    this.pageChange.emit(nextPage);
  }

  onPreviousGroupClick(): void {
    const previousPage = Math.max(this.currentPage - 5, 1);
    this.pageChange.emit(previousPage);
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    const pagesToShow = 5;
    const halfPagesToShow = Math.floor(pagesToShow / 2);
    let startPage = this.currentPage - halfPagesToShow;
    let endPage = this.currentPage + halfPagesToShow;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(startPage + pagesToShow - 1, totalPages);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - pagesToShow + 1, 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }
  // En tu componente TypeScript
  getMaxPage(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
}
