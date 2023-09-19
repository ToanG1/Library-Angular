import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'cDate',
})
export class CdatePipe implements PipeTransform {
  transform(value: Date): string {
    var datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'dd/MM/yyyy')!;
  }
}
