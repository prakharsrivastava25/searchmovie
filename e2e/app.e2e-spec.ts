import { SearchmoviePage } from './app.po';

describe('searchmovie App', () => {
  let page: SearchmoviePage;

  beforeEach(() => {
    page = new SearchmoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
