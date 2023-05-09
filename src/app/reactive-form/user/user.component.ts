import { FormatWidth, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  genders = ['Male', 'Female']
  userForm !: FormGroup;
  submitted = false;
  forbiddenPasswords = ['12345678', 'abcdefgh'];

  constructor() { }
  ngOnInit(): void {
    this.initializeForm();
  }

  // initializeForm() {
  //   this.userForm = new FormGroup({
  //     email: new FormControl(null, Validators.required),
  //     pwd: new FormControl(null, Validators.required),
  //     location: new FormControl(null),
  //     gender: new FormControl('Male'),
  //     remember: new FormControl(null, Validators.required),
  //   });
  // }

  initializeForm() {
    this.userForm = new FormGroup({
      login: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),// this.checkForbiddenEmail),
        pwd: new FormControl(null, Validators.required),// this.checkForbiddenPasswords.bind(this)]),
      }),
      location: new FormControl(null),
      gender: new FormControl('Male'),
      remember: new FormControl(null, Validators.required),
      hobbies: new FormArray([])
    });
  }

  test() {
    //console.log(this.userForm.get('login.email'));

  }

  // checkForbiddenPasswords(control: FormControl): { [k: string]: boolean } {
  //   if (this.forbiddenPasswords.indexOf(control.value) !== -1) {
  //     return { passwordForbidden: true };
  //   }
  //   // return { 'passwordForbidden': false }; // this will not work. So return null
  //   return false;
  // }

  checkForbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'admin@admin.com') {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
    return promise;
  }
  addHobbies() {
    const formcontrol = new FormControl(null, Validators.required);
    (<FormArray>this.userForm.get('hobbies')).push(formcontrol);
  }
  getHobbiesControl() {
    return (<FormArray>this.userForm.get('hobbies')).controls;
  }

  onSubmit() {
    console.log(this.userForm);
    this.submitted = true;
  }
  setvalueMethod() {
    this.userForm.setValue({
      login: {
        email: 'default@gmail.com',
        pwd: '12345678',
      },
      location: 'AHD',
      gender: 'Male',
      remember: true,
      hobbies: [],
    });
  }
  patchvalueMethod() {
    this.userForm.patchValue({
      location: 'AHD',
      gender: 'Female'
    })
  }

  reset() {
    this.userForm.reset();
    this.submitted = false;
  }

}
