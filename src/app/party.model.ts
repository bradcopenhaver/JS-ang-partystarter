export class Party {
  currentFunding: number = 0;
  constructor(public name: string, public type: string, public host: string, public goal: number, public location: string, public details: string, public date: string) { }
}
