import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {
  myObservable = new Observable((observer) => {
    console.log('observable starts')
    setTimeout(() => { observer.next("1") }, 1000);
    setTimeout(() => { observer.next("2") }, 2000);
    setTimeout(() => { observer.next("3") }, 3000);
    setTimeout(() => { observer.next("4") }, 4000);
    setTimeout(() => { observer.next("5") }, 5000);

    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");
  });

  ngOnInit(): void {
    this.myObservable.subscribe((val) => {
      console.log(val);
    });
  }
}
