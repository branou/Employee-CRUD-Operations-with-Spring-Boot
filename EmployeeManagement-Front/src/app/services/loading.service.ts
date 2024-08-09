import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  public isLeading$= new Subject<Boolean>();
  show(){
    this.isLeading$.next(true)
  }
  hide(){
    this.isLeading$.next(false)
  }
}
