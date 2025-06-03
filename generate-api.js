const { exec } = require('child_process')
const path = require('path');
const handleError = require("./handleError");
const deleteFolder = require("./deleteFolder");
const copyFile = require("./copyFile");

const java = require('./defaultSetting.js').java;

const jar = path.join(__dirname, './openapi-generator-cli-7.13.0.jar')

const doc = require('./defaultSetting.js').doc

const output = require('./defaultSetting.js').output

exec(`${ java } -jar ${ jar } generate -i ${ doc } -g javascript -o ${ output } --skip-validate-spec --template-dir ./custom-templates --global-property=models,apis --additional-properties=usePromises=true,sourceFolder=/,allowUnicodeIdentifiers=true`,
    (error, stdout, stderr) => handleError(error, stdout, stderr, () => {
        deleteFolder(`${path.join(output, '/test')}`);
        deleteFolder(`${path.join(output, '/docs')}`);

        copyFile(`${path.join(__dirname, './ApiClient.js')}`, `${output}`)
    }));

