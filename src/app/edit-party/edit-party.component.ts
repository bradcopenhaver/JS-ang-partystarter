import { Component, OnInit, Input } from '@angular/core';
import { PartyService } from '../party.service';

@Component({
  selector: 'app-edit-party',
  templateUrl: './edit-party.component.html',
  styleUrls: ['./edit-party.component.css'],
  providers: [PartyService]
})
export class EditPartyComponent implements OnInit {
  @Input() selectedParty;
  formVisibility: string = "hidden";

  constructor(private partyService: PartyService) { }

  ngOnInit() {
  }

  showEditForm(){
    this.formVisibility = "";
  }
  doneEditting(){
    this.partyService.updateParty(this.selectedParty);
    this.formVisibility = "hidden";
  }
}
