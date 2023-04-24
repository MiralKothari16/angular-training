import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDemoComponent } from './error-demo/error-demo.component';
import { FormsModule } from '@angular/forms';
import { ErrorServiceService } from './error-service.service';



@NgModule({
  declarations: [
    ErrorDemoComponent
  ],
  imports: [
    CommonModule,FormsModule
  ] ,
  exports:[
    ErrorDemoComponent
  ],
  providers:[ErrorServiceService,]
})
export class ErrorModuleModule { }
