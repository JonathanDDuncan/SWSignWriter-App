import { element, browser } from 'protractor';
import { AppPage } from './app.po';


describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();

  });
  const url = '/view';
  describe('default screen', () => {

    beforeEach(() => {
      page.navigateTo(url);
    });
    it('should have a title', function () {
      browser.get('/view');
      expect(browser.getTitle()).toEqual('SWSignWriter');
    });
    it('should have a title saying Document', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Document');
      });
    });
  });
});
