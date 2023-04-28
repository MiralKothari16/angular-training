import { Component, OnInit, Input, Output } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  welcomeText = "";


  public salesProducts = [
    { Id: 1, Name: 'Mobile', price: '10000' },
    { Id: 1, Name: 'TV', price: '40000' },
    { Id: 1, Name: 'Cloths', price: '1000' },
    { Id: 1, Name: 'Books', price: '1000' },
  ];
  public TopProducts = [
    { Id: 1, Name: 'cloths', price: '20000' },
    { Id: 1, Name: 'Ornaments', price: '40000' },
    { Id: 1, Name: 'Cosmetics', price: '10000' },
    { Id: 1, Name: 'Toys', price: '5000' },
  ];

  ngOnInit(): void {
    // console.log(this.messageToChild);
  }

  welcomeParent() {
    this.welcomeText = "Welcome Parent";
  }

  ///////////////// code for Lifecycle Hook 
  messageToChild = "Hello world.";
  item = "food-product";

  userData = "Hello";
  ItemData = "world"

  onChangeData() {
    this.ItemData = "item data is changed";
  }
}
