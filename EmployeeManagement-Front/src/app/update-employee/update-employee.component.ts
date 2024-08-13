import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Employee} from "../services/models/Employee";
import {EmployeeService} from "../services/employee.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent implements OnInit{
  id!: number;
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private employeeService:EmployeeService,private router:Router) {
  }
  employeeForm!: FormGroup;
  employee!:Employee;
  ngOnInit(): void {
    this.id =this.route.snapshot.params['id'];
     this.employeeService.getEmployee(this.id).subscribe({
       next:(value)=>{
         this.employee=value
       },
       error:err => {
         console.log('Error finding this employee:', err)
       }
     })
    this.employeeForm=this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      age: this.fb.control(''),
      salary: this.fb.control('')
    })
    }
  update() {
    let emp:Employee=this.employeeForm.value
    this.employeeService.updateEmployee(this.id,emp).subscribe({
      next : ()=>{
        confirm("employee updated successfully");
        this.router.navigate(['admin/listAll']);
      },
      error: err =>console.log('Error updating employee:', err)
    })

  }



}
