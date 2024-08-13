import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../services/models/Employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.scss'
})
export class ListEmployeesComponent implements OnInit{
  constructor(private employeeService: EmployeeService, private router: Router){
  }
  ngOnInit(): void {
    this.getEmployees();
    }
  employees:Array<Employee>=[];
  getEmployees(){
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
      next:() => this.getEmployees(),
      error: (err) => console.error('Error deleting employee', err)
    });
  }
  updateEmployee(emp:Employee){
    this.router.navigate(['admin/updateEmp',emp.id])
  }
  firstname:string='';
  search() {
    this.employeeService.searchEmployee(this.firstname).subscribe({
      next: data=>this.employees=data,
      error: err => console.log(err)
    })
  }
}
