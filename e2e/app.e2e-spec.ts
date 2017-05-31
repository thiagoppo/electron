import { ElectronPage } from './app.po';

describe('electron App', () => {
  let page: ElectronPage;

  beforeEach(() => {
    page = new ElectronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
