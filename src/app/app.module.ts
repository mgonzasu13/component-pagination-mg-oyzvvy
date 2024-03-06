import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CustomPaginationComponent } from './custom-pagination/custom-pagination.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, CustomPaginationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
