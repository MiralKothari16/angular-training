import { Injectable, OnInit } from '@angular/core';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {
  employees: IEmployee[] = [];

  constructor() { }

  getemployees(): IEmployee[] {
    return [
      { code: 'e101', name: "Miral", gender: 'Female', salary: 1000, DOB: '6/25/2000' },
      { code: 'e103', name: "Tejal", gender: 'Female', salary: 2000, DOB: '7/25/2000' },
      { code: 'e104', name: "Karm", gender: 'Male', salary: 3000, DOB: '8/25/2001' },
      { code: 'e104', name: "Tej", gender: 'Male', salary: 4000, DOB: '1/25/2002' },
    ];
  }
  ngOnInit(): void {

  }
  public totalsalary: number = 0;


  public showSalary(): any {
    this.employees.length;
  }
  // getTotalEmployeeCount(): number {
  //   return this.employees.length;
  // }
}
