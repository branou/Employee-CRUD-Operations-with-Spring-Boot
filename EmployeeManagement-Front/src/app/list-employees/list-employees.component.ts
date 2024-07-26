import { Component } from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {data} from "autoprefixer";
import {Employee} from "../services/models/Employee";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.scss'
})
export class ListEmployeesComponent {
  constructor(private employeeService: EmployeeService) {
  }
  employees:Array<Employee>=[];
  getAllEmployees(){
    this.employeeService.getEmployees().subscribe({
      next:data=>{
        this.employees=data
      },
      error:err => {
        console.log(err)
      }
    })
  }
}
