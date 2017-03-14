import { KanyeAngularPage } from './app.po';

describe('kanye-angular App', function() {
  let page: KanyeAngularPage;

  beforeEach(() => {
    page = new KanyeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
