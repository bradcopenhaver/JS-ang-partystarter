import { Component, Input, OnInit } from '@angular/core';
import { Party } from '../party.model';
import { PartyService } from '../party.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  @Input() selectedParty;

  constructor(private partyService: PartyService) { }

  ngOnInit() {

  }

  contributeToParty(currentParty, amount: string) {
    var amountNum: number = parseInt(amount);
    this.partyService.updatePartyFunds(currentParty, amountNum);
  }
}
