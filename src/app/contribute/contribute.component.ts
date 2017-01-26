import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  @Input() selectedParty;

  constructor() { }

  ngOnInit() {

  }

}
