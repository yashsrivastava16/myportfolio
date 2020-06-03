import { MyportfolioPage } from './app.po';

describe('myportfolio App', function() {
  let page: MyportfolioPage;

  beforeEach(() => {
    page = new MyportfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
