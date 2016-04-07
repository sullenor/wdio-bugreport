describe('initial', () => {
  before(() => {
    browser.url('https://www.google.ru/');
  });

  it('fail', () => {
    browser.waitForVisible('.something');
  });
});
