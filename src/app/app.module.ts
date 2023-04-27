import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ErrorModuleModule } from './error-module/error-module.module';
import { InputoutputdemoModule } from './inputoutputdemo/inputoutputdemo.module';

@NgModule({
  declarations: [AppComponent,
    // CommonErrorComponent,
  ],
  imports: [
    BrowserModule, CoreModule, ErrorModuleModule, InputoutputdemoModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
