const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.trymima.com',
    defaultCommandTimeout: 12000,
    //viweportHeight: 660,
    viewportWidth: 1050,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
