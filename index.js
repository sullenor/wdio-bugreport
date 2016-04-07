describe('initial', () => {
  before(() => {
    browser.addCommand('failMyTest', (customVar) => Promise.reject('artificial fail'));
  });

  before(() => {
    browser.url('https://www.google.ru/');
  });

  it('fail', () => {
    browser.failMyTest();
  });
});
