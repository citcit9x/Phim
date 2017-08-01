import { PhimPage } from './app.po';

describe('phim App', () => {
  let page: PhimPage;

  beforeEach(() => {
    page = new PhimPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
