const { defineConfig } = require("cypress");
const { getEnvironmentVariables } = require("./cypress/util/getEnviormentVariables");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      
      const environment = config.env.configFile || 'development'

      return getEnvironmentVariables(environment)
    },
  },
});
