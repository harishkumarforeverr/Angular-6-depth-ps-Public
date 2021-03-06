import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return String(value).slice(0, 30) + '...';
  }
}
