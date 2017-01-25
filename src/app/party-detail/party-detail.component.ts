import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Party } from '../party.model';
import { PartyService } from '../party.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css'],
  providers:  [PartyService]
})
export class PartyDetailComponent implements OnInit {
  partyId: string;
  partyToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private partyService: PartyService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.partyId = urlParameters['id'];
    });
    this.partyToDisplay = this.partyService.getPartyById(this.partyId);
  }

}
