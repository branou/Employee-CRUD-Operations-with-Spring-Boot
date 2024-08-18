import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEmployeesComponent} from "./list-employees/list-employees.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {AboutComponent} from "./about/about.component";
import {ErrorComponent} from "./error/error.component";
import {LoginComponent} from "./login/login.component";
import {AdminCatalogComponent} from "./admin-catalog/admin-catalog.component";
import {RegisterComponent} from "./register/register.component";
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path:'admin',
    component:AdminCatalogComponent,
    children:[
      {
        path:'listAll',
        component: ListEmployeesComponent,canActivate:[authGuard]
      },
      {
        path:'addEmp',
        component: AddEmployeeComponent,canActivate:[authGuard]
      },
      {
        path:'updateEmp/:id',
        component: UpdateEmployeeComponent,canActivate:[authGuard]
      },
      {
        path:'about',
        component: AboutComponent,canActivate:[authGuard]
      },
      {
        path:'404',
        component:ErrorComponent,canActivate:[authGuard]
      }
    ],canActivate:[authGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
