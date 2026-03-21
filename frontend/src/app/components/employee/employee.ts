import { Component } from '@angular/core';
import { Employee as EmployeeService }
  from '../../services/employee';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();

  }
  getEmployees() {
    this.employeeService.getEmployee().subscribe(
      res => {
        this.employeeService.employees = res;
      },
      err => console.log(err)
    );
  }

}
