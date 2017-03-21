'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /text-property-compares when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/text-property-compares");
  });


  describe('text-property-compares', function() {

    beforeEach(function() {
      browser.get('index.html#!/text-property-compares');
    });


    it('should render text-property-compares when user navigates to /text-property-compares', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('time-property-compares', function() {

    beforeEach(function() {
      browser.get('index.html#!/time-property-compares');
    });


    it('should render time-property-compares when user navigates to /time-property-compares', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
