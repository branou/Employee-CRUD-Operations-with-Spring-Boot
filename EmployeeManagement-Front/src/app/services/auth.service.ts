import { Injectable } from '@angular/core';
import {LoginRequest} from "./models/LoginRequest";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "./models/RegisterRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string='http://localhost:8080/auth';
  constructor(private http:HttpClient) { }

  login(loginReq:LoginRequest){
    return this.http.post<string>(`${this.url}/login`,loginReq)
  }
  register(registerReq:RegisterRequest){
    return this.http.post(`${this.url}/register`,registerReq)
  }
}
