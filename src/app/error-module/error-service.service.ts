import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor() { }
  displayName(name:string):void{alert(name);}
}
