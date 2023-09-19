import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sDate',
})
export class StringDatePipe implements PipeTransform {
  transform(value: string): string {
    var datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'dd/MM/yyyy')!;
  }
}
