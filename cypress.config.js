const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder')
const { allureCypress } = require("allure-cypress/reporter");
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse')
const fs = require('fs');


module.exports = defineConfig({
  projectId: "7qwnsy",
  viewportHeight: 1000,
  viewportWidth: 1500,
  reporter: 'cypress-mochawesome-reporter', 
  e2e: {
    setupNodeEvents(on, config) {
      if (process.env.CYPRESS_ENV) {
        const configFile = `./cypress/config/${process.env.CYPRESS_ENV}.json`;
        if (fs.existsSync(configFile)) {
          const configOverrides = require(configFile);
          const selectedConfigKey = process.env.CYPRESS_KEY || 'url1';
          if (configOverrides[selectedConfigKey]) {
            config = { ...config, ...configOverrides[selectedConfigKey] };
            config.baseUrl = configOverrides[selectedConfigKey].baseUrl;
          }
        }
      }

      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })
      on("task", {
        lighthouse: lighthouse()
      })
      allureCypress(on);
      require('cypress-mochawesome-reporter/plugin')(on) 
      on('task', { removeDirectory })
      require('@cypress/grep/src/plugin')(config);


      return config; 
    },
    // baseUrl: 'https://example.com'
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    experimentalStudio: true,
    experimentalWebKitSupport: true,
    experimentalRunAllSpecs: true
  },
});


