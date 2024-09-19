import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curr',
  standalone: true
})
export class CurrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "₹ " + value;
  }

}
