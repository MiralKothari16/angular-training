import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject/subject.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { Observable1Component } from './observable1/observable1.component';
import { RxJsOperatorsComponent } from './rx-js-operators/rx-js-operators.component';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    SubjectComponent,
    Observable1Component,
    RxJsOperatorsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderMenuComponent,
    SubjectComponent,
    Observable1Component,
    RxJsOperatorsComponent
  ]
})
export class ObservableDemoModule { }
