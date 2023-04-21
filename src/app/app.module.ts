import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonErrorComponent } from './common-error/common-error.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [AppComponent,
    CommonErrorComponent,
  ],
  imports: [
    BrowserModule,CoreModule 
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
