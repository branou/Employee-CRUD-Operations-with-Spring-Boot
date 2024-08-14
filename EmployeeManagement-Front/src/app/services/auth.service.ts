import { Injectable } from '@angular/core';
import {LoginRequest} from "./models/LoginRequest";
import {HttpClient} from "@angular/common/http";
import {RegisterRequest} from "./models/RegisterRequest";
import {AuthenticationResponse} from "./models/AuthenticationResponse";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string='http://localhost:8080/auth';
  constructor(private http:HttpClient) { }

  async login(loginReq:LoginRequest){
    return await firstValueFrom(this.http.post<AuthenticationResponse>(`${this.url}/login`,loginReq));
  }
  register(registerReq:RegisterRequest){
    return this.http.post(`${this.url}/register`,registerReq)
  }
}
