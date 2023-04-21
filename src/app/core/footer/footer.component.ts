import { Component } from '@angular/core';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public year = new Date().getFullYear();
  public email :string ='';
 public emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  public submit() :void{
    
    if(this.email===""){
      alert("Please enter email address.");
    }
    else if(!this.emailPattern.match(this.email)){
      alert("Please enter valid email address.");
    }
    else{}
  } 
}
