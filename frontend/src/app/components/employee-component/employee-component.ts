import { Component, signal, inject } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-employee-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-component.html',
  styleUrl: './employee-component.css',
})
export class EmployeeComponent {
  private employeeService = inject(EmployeeService);
  employee = signal<Employee[]>([]);
  cargando = signal(true);
  error = signal<string | null>(null);
  selectedEmployee = signal<Employee>({
    _id: '',
    name: '',
    office: '',
    position: '',
    salary:0
  });
  isEditing = signal(false);
  constructor(){
    this.loadEmployees();
  }
  loadEmployees(){
    this.cargando.set(true);
    this.employeeService.getEmployees().subscribe({
      next: (data)=> {
        this.employee.set(data);
        this.cargando.set(false);
      },
      error:()=>{
        this.error.set('Error al cargar');
        this.cargando.set(false);
      }
    })
  }
  updateField<K extends keyof Employee>(
    field: K, value: Employee[K]){
      this.selectedEmployee.update(emp =>({
        ...emp,
        [field]: value
      }));
    }
  saveEmployee(){
    const emp = this.selectedEmployee();
    if(this.isEditing()){
      this.employeeService.putEmployee(emp).subscribe(
        ()=>{
      this.loadEmployees();
        this.resetForm();
        }
      );
    }else{
      const { _id, ...employeeWithoutId}= emp
      this.employeeService.
      createEmployee(employeeWithoutId).subscribe(()=>{
        this.loadEmployees,
        this.resetForm();
      });
    }
  }
}
