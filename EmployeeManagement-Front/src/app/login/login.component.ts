import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor(private fb:FormBuilder) {
  }
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:this.fb.control(''),
      password:this.fb.control('')
    })
  }
  register() {

  }

  login() {

  }


}
