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

  addParty(newParty: Party) {
    var key;
    this.parties.push(newParty).then((snap)=> {key = snap.$key});
    console.log(key);
    return key;
  }

  getPartyById(partyId: string){
    return this.angularFire.database.object('parties/' + partyId);
  }

  updateParty(localUpdatedParty){
    var partyEntryInFirebase = this.getPartyById(localUpdatedParty.$key);
    partyEntryInFirebase.update({name: localUpdatedParty.name,
                                type: localUpdatedParty.type,
                                host: localUpdatedParty.host,
                                goal: localUpdatedParty.goal,
                                details: localUpdatedParty.details,
                                location: localUpdatedParty.location,
                                date: localUpdatedParty.date}
                              );
  }

  updatePartyFunds(currentParty: FirebaseObjectObservable<any>, amountOfFunds: number) {
    var updatedFunding: number;
    currentParty.subscribe(x => {updatedFunding = parseInt(x.currentFunding) + amountOfFunds});
    currentParty.update({currentFunding: updatedFunding});
  }

  deleteParty(localPartyToDelete){
    var partyEntryInFirebase = this.getPartyById(localPartyToDelete.$key);
    partyEntryInFirebase.remove();
  }
}

// edit (key, currentFundingh)
