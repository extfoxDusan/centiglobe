import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateClass'
})
export class StateClassPipe implements PipeTransform {
  transform(state: string): string {
    return state === 'ACCEPTED' ? 'accepted-chip' : 'rejected-chip';
  }
}
