import { LesPipelettesPage } from './app.po';

describe('les-pipelettes App', () => {
  let page: LesPipelettesPage;

  beforeEach(() => {
    page = new LesPipelettesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
