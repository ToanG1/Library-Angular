import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyPipe',
})
export class KeyPipe implements PipeTransform {
  transform(value: string): string {
    return value.substring(7);
  }
}
