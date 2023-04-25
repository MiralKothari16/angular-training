import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentcomponentComponent } from './parent-component/parentcomponent.component';
import { ChildcomponentComponent } from './child-component/childcomponent.component';



@NgModule({
  declarations: [
    ParentcomponentComponent,
    ChildcomponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InputoutputdemoModule { }
