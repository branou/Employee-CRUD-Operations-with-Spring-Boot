import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "../services/token.service";

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const tokenService=inject(TokenService);
  if(tokenService.isTokenNotValid()){
    router.navigate(['login']);
    return false;
  }
  return true;
};
