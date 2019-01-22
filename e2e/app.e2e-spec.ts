import { PruebaCi2WebPage } from './app.po';

describe('PruebaCi2WebPage App', () => {
  let page: PruebaCi2WebPage;

  beforeEach(() => {
    page = new PruebaCi2WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
