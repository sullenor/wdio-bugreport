exports.config = {
  specs: ['./index.js'],

  capabilities: [{
    browserName: 'firefox'
  }],

  maxInstances: 1,

  logLevel: 'verbose',

  coloredLogs: true,

  screenshotPath: './errorShots/',

  framework: 'mocha',

  reporters: ['dot'],

  before: function () {},
};
