import { AltspaceAngularStarterPage } from './app.po';

describe('altspace-angular-starter App', () => {
  let page: AltspaceAngularStarterPage;

  beforeEach(() => {
    page = new AltspaceAngularStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
