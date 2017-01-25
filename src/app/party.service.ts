import { Injectable } from '@angular/core';
import { Party } from './party.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PartyService {
  parties: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.parties = angularFire.database.list('parties');
  }

  getParties() {
    return this.parties;
  }

}
