import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {RegisterRequest} from "../services/models/RegisterRequest";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private authSer:AuthService) {
  }

  signup() {
    const registerReq:RegisterRequest={
      firstname:this.registerForm.value.firstname,
      lastname:this.registerForm.value.lastname,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password
    }
    this.authSer.register(registerReq).subscribe({
      next:()=>this.router.navigate(['login']),
      error:err => console.error(err)
    })

  }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstname:this.fb.control(''),
      lastname:this.fb.control(''),
      email:this.fb.control(''),
      password:this.fb.control(''),

    })
  }
}
