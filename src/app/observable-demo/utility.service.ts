import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, concat, interval, share } from 'rxjs';
import {
  of, from, concatWith, merge, map, take, concatMap, mergeMap,
  switchMap, takeUntil, forkJoin, shareReplay
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  exclusive = new Subject<boolean>();

  constructor(private http: HttpClient) { }
  ofoperator(): Observable<number> {
    let numbers$ = of(1, 2, 3, 4, 5);
    return numbers$;
  }
  ofOperatorWithList(): Observable<any[]> {
    let userdata = [
      {
        id: 1,
        name: 'Miral',
        role: 'Admin',
      },
      {
        id: 2,
        name: 'Tejal',
        role: "HR",
      },
    ];
    let users$ = of(userdata);
    return users$;
  }
  fromoperator(): Observable<number> {
    let numberarray = [1, 2, 3, 4, 5];
    let numberarray$ = from(numberarray);
    return numberarray$;
  }
  concatWithOperator(): Observable<number> {
    let num1$ = of(1, 3, 5, 7, 9);
    let num2$ = of(2, 4, 6, 8, 10);
    let concatnum$ = num1$.pipe(concatWith(num2$));
    return concatnum$;
  }
  mergeOperator(): Observable<number> {
    const num1$ = interval(1000);// .pipe(map(v => 'video# ' + (v + 1)), take(5));
    const num2$ = interval(2000);
    const merge$ = merge(num1$, num2$);
    return merge$;
  }
  mapOperator(): Observable<number> {
    let numbers$ = of(2, 4, 6, 8);
    let map$ = numbers$.pipe(map(x => x * 10));
    return map$;
  }
  concatMapOperator(): Observable<string> {
    const srcObservable$ = of(1, 2, 3, 4, 5);
    const innerObservable$ = of('A', 'B', 'C', 'D');

    const concatMapped$ = srcObservable$.pipe(
      concatMap((value) => {
        console.log('Source value :- ', value);
        console.log('Starting inner observable');
        return innerObservable$;
      })
    );

    return concatMapped$;

  }

  mergeMapOperator(): Observable<any> {
    const breeds$ = of('hound', 'mastiff', 'retriever');
    const mergemap$ = breeds$.pipe(mergeMap((breed) => {
      const url = 'https://dog.ceo/api/breed/' + breed + '/list';
      return this.http.get<any>(url);  //inner observable
    })
    );
    return mergemap$;
  }
  SwitchMapOperator(): Observable<any> {
    const breeds$ = of('sniffer', 'Pomerian', 'doberman');
    const switchmap$ = breeds$.pipe(switchMap((breed) => {
      const url = 'https://dog.ceo/api/breed/' + breed + '/list';
      return this.http.get<any>(url);  //inner observable
    })
    );
    return switchmap$;
  }
  concatMapWithAPI(): Observable<any> {
    const breeds$ = of('hound', 'mastiff', 'retriever');
    const cntmap$ = breeds$.pipe(concatMap((breed) => {
      const url = 'https://dog.ceo/api/breed/' + breed + '/list';
      return this.http.get<any>(url);  //inner observable
    })
    );
    return cntmap$;
  }
  takeUntil() {
    const source$ = interval(500);
    return source$;
  }
  getDogBreed(breed: string): Observable<any> {
    const url = 'https://dog.ceo/api/breed/' + breed + '/list';
    return this.http.get<any>(url);
  }
  shareReply(): Observable<number> {
    const source$ = interval(2000).pipe(take(6), shareReplay(3));
    return source$;
  }
}

