import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private URL_API = 'http://localhost:3000/api/employees';
  employee: Employee[] = [];
  constructor(private http: HttpClient){}
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.URL_API);
  }
  createEmployee(employee: Employee){
    return this.http.post(this.URL_API, employee);
  }
  deleteEmployee(_id: string | undefined){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  putEmployee(employee: Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }

}
