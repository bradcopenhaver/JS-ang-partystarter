import { Pipe, PipeTransform } from '@angular/core';
import { Party } from './party.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Pipe({
  name: 'partyType',
  pure: false
})
export class PartyTypePipe implements PipeTransform {

  transform(input: any, partyType: string) {
    console.log(input);
    var output: any[] = [];
    input.forEach(party => {
      party.forEach(indParty => {
        console.log(indParty.type);
        console.log(partyType);
        debugger;
        if (indParty.type === partyType) {
          output.push(indParty);
        }
      });
    });

    return output;
  }
}
