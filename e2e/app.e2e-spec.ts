import { TestcomponentePage } from './app.po';

describe('testcomponente App', () => {
  let page: TestcomponentePage;

  beforeEach(() => {
    page = new TestcomponentePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
