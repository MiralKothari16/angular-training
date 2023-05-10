import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})


export class TestComponent implements OnInit {
  public name = "Codevolution";
  public message = "Welcome to Ahmedabad";
  public number = 5.678;
  public currencyValue = 100;
  public perc = 0.25;
  public amount = 0.25;
  public date = new Date();
  public usdamt = 30;

  // for json pipe
  public person = {
    "firstName": "hello",
    "lastName": "world",
  }
  ngOnInit(): void {

  }

}
