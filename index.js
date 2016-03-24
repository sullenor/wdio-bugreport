describe('initial', () => {
  before(() => {
    browser.url('https://www.google.ru/');
  });

  it('simple assert', () => {});

  describe('failure', () => {
    before(() => {
      browser.element('body .non-existing-element')
    });

    it('test', () => {});
  });
});
