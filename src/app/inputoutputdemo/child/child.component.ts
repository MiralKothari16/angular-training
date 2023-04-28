import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Output() welcomeParent1 = new EventEmitter();


  ///////////////// code for Lifecycle Hook 

  @Input() messageToChild !: string;
  @Input() Item !: string;
  @Input() Products !: any[];
  //private myNumber: number = 0;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log("ng-OnChange is called.");
    console.log(changes);
  }

  ngOnInit() {
    console.log("somethind come inside ONInit.")
    console.log("ng-OnInit called");
  }

  ngAfterContentInit() {
    console.log("ng AfterContentInit is called");
    //console.log("ng AfterContentInit  will fired only once even we are not using ngcontent");
  }

  ngAfterContentChecked() {
    console.log("ng AfterContent Checked is called");
  }
  ngAfterViewInit() {
    console.log("ng AfterViewInit is called");
  }

  ngAfterViewChecked() {
    console.log("ng AfterView Checked is called");
    //console.log("first call ngonchanged then ngdochecked , then ngaAfterContentChecked, then ngViewChecked")
  }
  ngOnDestroy() {
    console.log("On Component Destroy");
  }

  //////////////////////////////////////////////////////////


  welcome() {
    //this.welcomeParent1.emit();
  }

}
