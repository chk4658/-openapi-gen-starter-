const { exec } = require('child_process')
const path = require('path');
const handleError = require("./handleError");

const java = require('./defaultSetting.js').java;

const jar = path.join(__dirname, './openapi-generator-cli-7.13.0.jar')

exec(`${ java } -jar ${ jar } config-help -g javascript`, handleError)

