import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ErrorModuleModule } from './error-module/error-module.module';

@NgModule({
  declarations: [AppComponent,  
   // CommonErrorComponent,
  ],
  imports: [
    BrowserModule,CoreModule ,ErrorModuleModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
