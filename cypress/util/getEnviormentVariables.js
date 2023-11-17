const fs = require('fs-extra')
const path = require('path')

function getEnvironmentVariables(environment) {

    const pathToConfigFile = path.resolve('cypress', 'config', `${environment}.json`)
    if (!fs.existsSync(pathToConfigFile)){
        throw new Error(`Environment variables file not found in folder cypress/config. File ${environment}.json`)
    }
  
    return fs.readJson(pathToConfigFile)
}

module.exports = { getEnvironmentVariables };
