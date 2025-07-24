import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackStatus',
})
export class TrackStatusPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Completada' : 'Pendiente';
  }
}
