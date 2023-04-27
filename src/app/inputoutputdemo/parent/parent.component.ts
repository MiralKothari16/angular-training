import { Component, OnInit, Input, Output } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  welcomeText = "";
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
