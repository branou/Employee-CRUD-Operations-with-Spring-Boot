import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEmployeesComponent} from "./list-employees/list-employees.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";

const routes: Routes = [
  {
    path:'listAll',
  component: ListEmployeesComponent
  },
  {
    path:'addEmp',
    component: AddEmployeeComponent
  },
  {
    path:'updateEmp',
    component: UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
