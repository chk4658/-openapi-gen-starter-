const { exec } = require('child_process')
const path = require("path");
const java = require('./defaultSetting.js').java;
const jar = path.join(__dirname, './openapi-generator-cli-7.13.0.jar')


exec(`${ java } -jar ${ jar } author template -g javascript -o ./default-templates`)


