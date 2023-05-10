import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpdemoComponent } from './httpdemo/httpdemo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HttpdemoComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [HttpdemoComponent],
})
export class HttpdemoModule { }
