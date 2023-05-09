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
import { EmployeeModule } from './employee/employee.module';
import { EmployeeService } from './employee/employee.service';
import { TemplateDrivenFormModule } from './template-driven-form/template-driven-form.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';



@NgModule({
  declarations: [AppComponent, Directive1Directive, AlternatIfDiractive
    // CommonErrorComponent,
  ],
  imports: [
    BrowserModule, CoreModule, ErrorModuleModule, InputoutputdemoModule, ObservableDemoModule, EmployeeModule,
    TemplateDrivenFormModule, ReactiveFormModule, FormsModule
    //AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
