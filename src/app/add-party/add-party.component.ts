import { Component, OnInit } from '@angular/core';
import { Party } from '../party.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { PartyService } from '../party.service';

@Component({
  selector: 'app-add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.css'],
  providers: [PartyService]
})
export class AddPartyComponent implements OnInit {

  constructor(private partyService: PartyService) { }

  ngOnInit() {
  }

  submitForm(name: string, type: string, host: string, goal: number, location: string, details: string, date: string) {
    var newParty: Party = new Party(name, type, host, goal, location, details, date);
    this.partyService.addParty(newParty);
  }


}
