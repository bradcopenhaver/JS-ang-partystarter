import { Pipe, PipeTransform } from '@angular/core';
import { Party } from './party.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Pipe({
  name: 'partyType',
  pure: false
})
export class PartyTypePipe implements PipeTransform {

  transform(input: any[], partyType: string) {
    var output: Party[] = [];
    if (input != null) {
    if (partyType != "") {
        for (var i= 0; i < input.length; i++) {
          if (input[i].type === partyType) {
            output.push(input[i]);
          }
        };
        return output;
      };
      return input;
    }
  }
}
