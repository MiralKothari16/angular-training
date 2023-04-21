import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar/sidebar.component';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BookListComponent,
    FooterComponent,  ],
  imports: [CommonModule,FormsModule,],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BookListComponent,
  ],
})
export class CoreModule { }
