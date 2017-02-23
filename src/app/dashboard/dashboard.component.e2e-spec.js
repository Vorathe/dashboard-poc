describe('Dashboard', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <cmp-home>', function () {
    var dashboard = element(by.css('cmp-app cmp-home'));
    expect(dashboard.isPresent()).toEqual(true);
    expect(dashboard.getText()).toEqual("Dashboard Works!");
  });

});
