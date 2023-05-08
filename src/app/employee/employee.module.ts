import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeesalaryComponent } from './employeesalary/employeesalary.component';



@NgModule({
  declarations: [
    EmployeelistComponent,
    EmployeesalaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeelistComponent,
  ]

})
export class EmployeeModule { }
