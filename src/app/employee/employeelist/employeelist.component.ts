import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../iemployee';
//import { provideRouter, provideRoutes } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']

})
export class EmployeelistComponent {
  employees!: IEmployee[];
  isShowSalary: boolean = false;

  constructor(private _employeeservice: EmployeeService) {

  }
  ngOnInit() {
    this.employees = this._employeeservice.getemployees();
  }

  public showSalary(): void {
    this.isShowSalary = !this.isShowSalary;
  }
  getTotalEmployeeCount(): number {
    return this.employees.length;
  }
}
