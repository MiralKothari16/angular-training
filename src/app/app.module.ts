import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ErrorModuleModule } from './error-module/error-module.module';
import { InputoutputdemoModule } from './inputoutputdemo/inputoutputdemo.module';
import { Observable } from 'rxjs';
import { ObservableDemoModule } from './observable-demo/observable-demo.module';
import { Directive1Directive } from './directive-demo/directive1.directive';
import { AlternatIfDiractive } from './directive-demo/AlternateIf.directive';


@NgModule({
  declarations: [AppComponent, Directive1Directive, AlternatIfDiractive
    // CommonErrorComponent,
  ],
  imports: [
    BrowserModule, CoreModule, ErrorModuleModule, InputoutputdemoModule, ObservableDemoModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
