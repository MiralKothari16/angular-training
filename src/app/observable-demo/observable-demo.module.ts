import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject/subject.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    SubjectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderMenuComponent,
    SubjectComponent,

  ]
})
export class ObservableDemoModule { }
