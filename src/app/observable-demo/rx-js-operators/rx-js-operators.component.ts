import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Observable, Subscription, timer, take, takeUntil, forkJoin, Subject } from 'rxjs';

@Component({
  selector: 'app-rx-js-operators',
  templateUrl: './rx-js-operators.component.html',
  styleUrls: ['./rx-js-operators.component.css']
})
export class RxJsOperatorsComponent {
  subscriptions: Subscription[] = [];
  breeds$!: Observable<any>;
  searchText!: string;
  searchBreed$ = new Subject<any>();

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
    this.subscriptions.push(this._utilityservice.SwitchMapOperator().subscribe(resp => {
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
  onClickForkJoinOperator() {
    const obj1 = this._utilityservice.getDogBreed('hound');
    const obj2 = this._utilityservice.getDogBreed('mastiff');
    const obj3 = this._utilityservice.getDogBreed('retriever');

    forkJoin([obj1, obj2, obj3]).subscribe(res => {
      console.log('fork join data:', res);
    },
      error => {
        console.log('Error in fork join data :', error);
      });
  }
  search() {
    this.searchBreed$.next(this.searchText)
  }
  onClickShareReplyOperator() {
    this._utilityservice.shareReply().subscribe((res) => {
      console.log('Obj1', res)
    });
    this._utilityservice.shareReply().subscribe((res) => {
      console.log('obj2', res)
    });
    setTimeout(() => {

      this._utilityservice.shareReply().subscribe((res) => {
        console.log('obj3', res);
      });
    }, 1000);
  }
}

