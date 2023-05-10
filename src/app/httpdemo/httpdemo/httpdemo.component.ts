import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Iuser } from '../iuser';
import { NgForm } from '@angular/forms'; 4

@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html',
  styleUrls: ['./httpdemo.component.css']
})
export class HttpdemoComponent {
  @ViewChild('f') firstTDFrom!: NgForm;

  constructor(private http: HttpClient) { }
  user: Iuser[] = [
    {
      firstName: 'Miral',
      lastName: 'Kothari',
      gender: 'Female',
      dob: '04/10/2000',
      role: 'user',
      hobbies: 'Reading, listening Music',
    },
    {
      firstName: 'Tejal',
      lastName: 'Patel',
      gender: 'Female',
      dob: '04/10/2000',
      role: 'user',
      hobbies: 'Watching Movies,Travelling',
    }
  ];
  // user1: Iuser[] = [
  //   {
  //     firstName:
  //     lastName: 'Kothari',
  //     gender: 'Female',
  //     dob: '04/10/2000',
  //     role: 'user',
  //     hobbies: 'Reading, listening Music',
  //   },
  // ];

  public onSubmit(firstTDFrom: NgForm): void {
    // console.log(this.user1);
    // this.http.post(env.baseUrl + 'user.json', this.user1).subscribe();
  }

  public AddUser(): void {
    console.log(this.user);
    this.http.post(env.baseUrl + 'user.json', this.user).subscribe();
  }
  public UpdateUser() { }
  public GetUser() {
    this.http.post(env.baseUrl + 'user /-NV4_IVHXlTMaGCNnu62.json', this.user).subscribe();
    console.log(this.user);
  }
  public DeleteUser() {
    // this.http.delete()
    //(env.baseUrl + 'user/-NV4_IVHXlTMaGCNnu62.json', this.user).subscribe();
    console.log(this.user);
  }


}
