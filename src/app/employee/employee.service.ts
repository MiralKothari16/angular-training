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
      { code: 'e101', name: "Miral", salary: 1000 }, // gender: 'Female', , DOB: '6/25/2000' },
      { code: 'e103', name: "Tejal", salary: 2000 },// gender: 'Female', , DOB: '7/25/2000' },
      { code: 'e104', name: "Karm", salary: 3000 },// gender: 'Male',salary: 3000 , DOB: '8/25/2001' },
      { code: 'e104', name: "Tej", salary: 4000 },// gender: 'Male', , DOB: '1/25/2002' },
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
  addNewUser(code: string, name: string, salary: number) {
    this.employees.push({
      code: code, name: name, salary: salary
    })

  }
}
