import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';




@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    ObservableDemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentComponent,
    ChildComponent,
    ObservableDemoComponent
  ]
})
export class InputoutputdemoModule { }
