import { Component } from '@angular/core';
import { ErrorServiceService } from '../error-service.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-error-demo',
  templateUrl: './error-demo.component.html',
  styleUrls: ['./error-demo.component.css']
})
export class ErrorDemoComponent {
  firstName:string="";
  names:any=[];

  constructor(private errorservice:ErrorServiceService){
    this.firstName="hello";
  }
  addName(){
    this.names.push({firstName: this.firstName});
  }
  displayName(){
    this.errorservice.displayName(this.firstName);
  }
  deleteName(index:number){
    const position =  index+1;
    this.names.splice(position,1);
  }
   
}
