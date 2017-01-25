import { Component, OnInit } from '@angular/core';
import { Party } from '../party.model';
import { PartyService } from '../party.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PartyService]
})
export class WelcomeComponent implements OnInit {
  parties: FirebaseListObservable<any[]>;

  constructor(private router: Router, private partyService: PartyService) { }

  ngOnInit() {
    this.parties = this.partyService.getParties();
  }

  goToDetailPage(clickedParty){
    this.router.navigate(['parties', clickedParty.$key]);
  }
}
