import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  exclusive: boolean = true;
  constructor(private _utitlity: UtilityService) {
  }
  ngOnInit(): void {
    this._utitlity.exclusive.subscribe(res => {
      this.exclusive = res;
    });
  }

}
