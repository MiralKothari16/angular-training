import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { UsrInrPipe } from './usr-inr.pipe';

@NgModule({
  declarations: [
    TestComponent, UsrInrPipe

  ],
  imports: [
    CommonModule
  ],
  exports: [TestComponent, UsrInrPipe]
})
export class PipesDemoModule { }
