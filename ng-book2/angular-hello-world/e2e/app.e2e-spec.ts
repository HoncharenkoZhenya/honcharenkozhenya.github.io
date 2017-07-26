import { AngularHelloWorldPage } from './app.po';

describe('angular-hello-world App', () => {
  let page: AngularHelloWorldPage;

  beforeEach(() => {
    page = new AngularHelloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
