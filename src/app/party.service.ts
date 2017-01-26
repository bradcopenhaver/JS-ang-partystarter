import { Injectable } from '@angular/core';
import { Party } from './party.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class PartyService {
  parties: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.parties = angularFire.database.list('parties');
  }

  getParties() {
    return this.parties;
  }

  getPartyById(partyId: string){
    return this.angularFire.database.object('parties/' + partyId);
  }

  updateParty(localUpdatedParty){
    var partyEntryInFirebase = this.getPartyById(localUpdatedParty.$key);
    partyEntryInFirebase.update({title: localUpdatedParty.title,
                                artist: localUpdatedParty.artist,
                                description: localUpdatedParty.description});
  }

  updatePartyFunds(currentParty: FirebaseObjectObservable<any>, amountOfFunds: number) {
    var updatedFunding: number;
    currentParty.subscribe(x => {updatedFunding = parseInt(x.currentFunding) + amountOfFunds});
    // var currentPartyFunds = partyEntryInFirebase.object('currentFunding/');
    // var totalFunds = partyEntryInFirebase + amountOfFunds;
    currentParty.update({currentFunding: updatedFunding});
  }

}

// edit (key, currentFundingh)
