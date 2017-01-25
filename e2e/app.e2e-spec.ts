import { PartystarterPage } from './app.po';

describe('partystarter App', function() {
  let page: PartystarterPage;

  beforeEach(() => {
    page = new PartystarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
