import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./models/Employee";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string='http://localhost:8080/api/employee';
  constructor(private http:HttpClient) { }
  getEmployees(){
    return this.http.get<Array<Employee>>(`${this.url}/all`);
  }
  deleteEmployee(id:number){
    return this.http.delete<any>(`${this.url}/delete/${id}`);
  }
  updateEmployee(id:number,emp:Employee){
    return this.http.put<number>(`${this.url}/update/${id}`,emp);
  }

  saveEmployee(emp: Employee) {
    return this.http.post<any>(`${this.url}/save`,emp);
  }
  searchEmployee(firstname:string){
    return this.http.get<Array<Employee>>(`${this.url}/search/${firstname}`);
  }
}
