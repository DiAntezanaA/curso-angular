import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'expo'
})
export class ExpoPipe implements PipeTransform {
  transform(value: any, exponent?: anyn aux?: string): any{
    return aux + ' ' + Math.pow(value, isNan(exponent) ? 1 : exponent);
  }
}