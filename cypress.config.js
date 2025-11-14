const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://staging.trymima.com',
    baseUrl: "https://www.dummyticket.com/",
    defaultCommandTimeout: 12000,
    viewportHeight: 960,
    viewportWidth: 1530,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
