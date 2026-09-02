import { Pipe, PipeTransform } from '@angular/core';
import { maxLength } from '@angular/forms/signals';

@Pipe({
  name: 'trimtext',
})
export class TrimtextPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    if (args.length > 0 && args[0] <= value.length) {
      return value.substring(0, args[0]);
    }
    else{
      return value.substring(0, 5);
    }
  }
}

