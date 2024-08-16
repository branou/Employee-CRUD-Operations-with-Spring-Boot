import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {LoginRequest} from "../services/models/LoginRequest";
import {TokenService} from "../services/token.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
   constructor(private fb:FormBuilder,private router:Router,private authSer:AuthService,
               private tokenService:TokenService) {
  }
  loginForm!:FormGroup
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:this.fb.control(''),
      password:this.fb.control('')
    })
  }
  register() {
    this.router.navigate(['register'])
  }
  tokenn!: string;
  login() {
    const loginReq: LoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.authSer.login(loginReq).then(value => {
      if (value) {
        this.tokenn = value.token as string;
        this.router.navigate(['admin/listAll']);
        this.tokenService.setToken(this.tokenn);
      }
    })
        .catch(err => {
          console.error('Login failed', err);
        });
  }


}
