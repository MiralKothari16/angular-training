import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @ViewChild('f') firstTDFrom!: NgForm;
  location = "AHD";
  genders = ['Male', 'Female'];
  submitted = false;
  user = {
    firstname: '',
    lastname: '',
    email: '',
    pwd: '',
    location: '',
    gender: '',
    remember: false
  };

  constructor() { }
  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.firstTDFrom);
    this.submitted = true;
    this.user.firstname = this.firstTDFrom.value.firstname;
    this.user.lastname = this.firstTDFrom.value.lastname;
    this.user.email = this.firstTDFrom.value.email;
    this.user.pwd = this.firstTDFrom.value.pwd;
    this.user.location = this.firstTDFrom.value.location;
    this.user.gender = this.firstTDFrom.value.gender;
    this.user.remember = this.firstTDFrom.value.remember;
  }
  setvalueMethod() {
    this.firstTDFrom.setValue({
      firstname: 'Miral',
      lastname: 'Kothari',
      email: 'mm@g.com',
      pwd: '12345',
      location: 'RJT',
      gender: 'Female',
      remember: true
    })

  }

  patchvalueMethod() {

    this.firstTDFrom.form.patchValue({
      location: 'AHD',
      gender: 'Female'
    })
  }
  reset() {
    this.firstTDFrom.reset();
    this.submitted = false;
  }
}
