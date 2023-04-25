import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { BookListComponent } from './book-list/book-list.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BookListComponent,
    FooterComponent,
    MainComponent,
    CardsComponent,],

  imports: [CommonModule, FormsModule,],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BookListComponent,
    CardsComponent,
    MainComponent,
  ],
})
export class CoreModule { }
