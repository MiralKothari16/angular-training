import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeesalaryComponent } from './employeesalary/employeesalary.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [
    EmployeelistComponent,
    EmployeesalaryComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [EmployeeService],
  exports: [
    EmployeelistComponent,
  ]


})
export class EmployeeModule { }
