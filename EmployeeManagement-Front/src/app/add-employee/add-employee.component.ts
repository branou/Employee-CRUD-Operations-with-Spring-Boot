import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../services/employee.service";
import {Employee} from "../services/models/Employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit{
  formEmployee!:FormGroup;
  constructor(private fb:FormBuilder, private employeeService:EmployeeService,private router:Router) {
  }

  ngOnInit(): void {
    this.formEmployee=this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      age: this.fb.control(''),
      salary: this.fb.control('')
    })
  }

  save() {
    let emp:Employee=this.formEmployee.value
    this.employeeService.saveEmployee(emp).subscribe({
      next : ()=>{
        confirm("employee created successfully");
        this.router.navigate(['listAll']);
      },
      error: err =>console.log('Error creating employee:', err)
    })

  }
}
