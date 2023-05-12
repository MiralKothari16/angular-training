import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment.development';
import { Iuser } from '../iuser';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
4

@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html',
  styleUrls: ['./httpdemo.component.css']
})
export class HttpdemoComponent {
  @ViewChild('httpdemo1') httpdemo1!: NgForm;
  genders = ['Male', 'Female'];
  roles = ['Admin', 'User', 'HR'];
  hobbies = ['Reading', 'Watching movies', 'Cooking', 'Listening Music'];
  public user2: Iuser[] = [];
  constructor(private http: HttpClient) { }

  public AddUser(httpdemo1: NgForm): void {
    const user = httpdemo1.value;
    //console.log(user);
    this.http.post(env.baseUrl + 'user.json', user).subscribe({
      next: (response) => { console.log(response) },
      error: (error) => { console.log(error) },
    });
  }

  public GetUser() {
    this.http
      .get(env.baseUrl + 'user.json')
      .pipe(
        map((res: { [k: string]: any }) => {
          const userList: any = [];
          Object.keys(res).forEach((id) => {
            let val: any = res[id];
            let obj = { id, ...val };
            userList.push(obj);
          });
          return userList;
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.user2 = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  public UpdateUser(httpdemo1: NgForm): void {
    const Updateuser = httpdemo1.value;
    this.http.put(env.baseUrl + 'user.json', Updateuser).subscribe({
      next: (response) => { console.log(response) },
      error: (error) => { console.log(error) },
    });
    //this.http.put(env.baseUrl + 'user/-NV4_IVHXlTMaGCNnu62.json', this.user).subscribe();
  }
  public PatchUser(httpdemo1: NgForm): void {
    const user = httpdemo1.value;
    this.http.patch(env.baseUrl + 'user.json', user).subscribe({
      next: (response) => { console.log(response) },
      error: (error) => { console.log(error) },
    });
  }
  public DeleteUser(httpdemo1: NgForm): void {
    const user = httpdemo1.value;
    this.http.delete(env.baseUrl + 'user/-NV9SfmQWVhsxTktvukD.json', user).subscribe({
      next: (response) => { console.log(response) },
      error: (error) => console.log(error),

    })
  }
  // without using  Form contorl 
  // constructor(private http: HttpClient) { }
  // user: Iuser[] = [
  //   {
  //     firstName: 'Miral',
  //     lastName: 'Kothari',
  //     gender: 'Female',
  //     dob: '04/10/2000',
  //     role: 'admin',
  //     hobbies: 'Reading, listening Music',
  //   },
  //   {
  //     firstName: 'Tejal',
  //     lastName: 'Patel',
  //     gender: 'Female',
  //     dob: '04/10/2000',
  //     role: 'user',
  //     hobbies: 'Watching Movies,Travelling',
  //   }
  // ];
  // public AddUser(): void {
  //   console.log(this.user);
  //   this.http.post(env.baseUrl + 'user.json', this.user).subscribe();
  // }
  // public UpdateUser() {
  //   this.http.put(env.baseUrl + 'user/-NV4_IVHXlTMaGCNnu62.json', this.user).subscribe();
  //   console.log(this.user);
  // }
  // public GetUser() {
  //   this.http.post(env.baseUrl + 'user.json', this.user).subscribe();
  //   console.log(this.user);
  // }
  // public DeleteUser() {
  //   this.http.delete(env.baseUrl + 'user/-NV4_IVHXlTMaGCNnu62.json').subscribe();
  //   console.log(this.user);
  // }


}
