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

  reporters: ['dot', 'allure'],
  reporterOptions: {
    outputDir: './allure-results'
  },

  waitforTimeout: 500,
};
