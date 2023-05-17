import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Observable, Subscription, timer, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rx-js-operators',
  templateUrl: './rx-js-operators.component.html',
  styleUrls: ['./rx-js-operators.component.css']
})
export class RxJsOperatorsComponent {
  subscriptions: Subscription[] = [];

  constructor(private _utilityservice: UtilityService) { }

  onClickOfOperator() {
    this.subscriptions.push(this._utilityservice.ofoperator().subscribe(resp => {
      console.log(resp);
    }));

    this.subscriptions.push(this._utilityservice.ofOperatorWithList().subscribe(resp => {
      console.log(resp);
    }));
  }

  onClickfromOperator() {
    this.subscriptions.push(this._utilityservice.fromoperator().subscribe(resp => {
      console.log(resp);
    }));
  }
  onClickconcatWithOperator() {
    this.subscriptions.push(this._utilityservice.concatWithOperator().subscribe(resp => {
      console.log(resp);
    }));
  }
  onClickmergeOperator() {
    this.subscriptions.push(this._utilityservice.mergeOperator().subscribe(resp => {
      console.log(resp);
    }));
  }
  onClickmapOperator() {
    this.subscriptions.push(this._utilityservice.mapOperator().subscribe(resp => {
      console.log(resp);
    }));
  }
  onClickconcatmapOperator() {
    this.subscriptions.push(this._utilityservice.concatMapOperator().subscribe(resp => {
      console.log(resp);
    }));
  }
  onClickmergemapOperator() {
    this.subscriptions.push(this._utilityservice.mergeMapOperator().subscribe(resp => {
      console.log(resp);
    }));
  }
  onClickswitchmapOperator() {
    this.subscriptions.push(this._utilityservice.mergeMapOperator().subscribe(resp => {
      console.log(resp);
    }));
  }
  onClickTakeOperator() {
    this.subscriptions.push(this._utilityservice.concatMapWithAPI()
      .pipe(take(1))
      .subscribe(res => {
        console.log('Take operator called :- ', res);
      }));
  }
  onClickTakeUntilOperator() {
    const timer$ = timer(5000);

    this.subscriptions.push(this._utilityservice.takeUntil()
      .pipe(takeUntil(timer$))
      .subscribe(res => {
        console.log('Take Until operator called :- ', res);
      }));
  }
  onClickForkJoinOOperator() {
    //const obj1 = this._utilityservice.getDogBreed('Sniffer');
    //
  }
}

