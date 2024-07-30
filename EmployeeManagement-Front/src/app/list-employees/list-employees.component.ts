import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../services/models/Employee";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.scss'
})
export class ListEmployeesComponent implements OnInit{
  constructor(private employeeService: EmployeeService){
  }

  ngOnInit(): void {
    this.getEmployee();
    }
  employees:Array<Employee>=[];
  getEmployee(){
    this.employeeService.getEmployees().subscribe({
      next:data=>{
        this.employees=data
      },
      error:err => {
        console.log(err)
      }
    })
  }
  deleteEmployee(emp:Employee){
    this.employeeService.deleteEmployee(emp.id).subscribe({
      next:() => this.getEmployee()
    });
  }
}
