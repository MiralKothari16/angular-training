import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-employeesalary',
  templateUrl: './employeesalary.component.html',
  styleUrls: ['./employeesalary.component.css']
})
export class EmployeesalaryComponent implements OnInit {
  employees!: IEmployee[];


  constructor(private _employeeservice: EmployeeService) { }
  //isShowSalary: boolean = false;


  ngOnInit(): void {
    console.log('calling from summary component :- ', this._employeeservice.showSalary());
  }
  // addEmployee() { }
}
