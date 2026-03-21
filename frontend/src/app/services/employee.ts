import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee as EmployeeModel } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  URL_API = 'http://localhost:3000/api/employees/';

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get(this.URL_API);
  }
  
}
