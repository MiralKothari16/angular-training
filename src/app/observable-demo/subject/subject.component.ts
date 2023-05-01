import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private _utitlity: UtilityService) { }
  ngOnInit(): void {
    this._utitlity.exclusive.next(true)
  }
}
