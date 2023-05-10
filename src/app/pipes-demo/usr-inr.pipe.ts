import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'

})
export class UsrInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price] = args;
    return value * price;
    return null;
  }
}
