import { Component } from '@angular/core';
import { Employee as EmployeeService } 
from '../../services/employee';
@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  constructor(private employeeService: EmployeeService) { }
  ngOnInit():void{
    console.log(
      this.employeeService.getEmployee().subscribe(
      res => console.log(res),
      err => console.log(err)
    ));
  }

}
