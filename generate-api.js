const { exec } = require('child_process')
const path = require('path');
const handleError = require("./handleError");
const deleteFolder = require("./deleteFolder");
const copyFile = require("./copyFile");

const java = require('defaultSetting.json').java;

const jar = path.join(__dirname, './openapi-generator-cli-7.13.0.jar')

const doc = require('defaultSetting.json').doc

const output = require('defaultSetting.json').output

exec(`${ java } -jar ${ jar } generate -i ${ doc } -g javascript -o ${ output } --skip-validate-spec --template-dir ./custom-templates --global-property=models,apis --additional-properties=usePromises=true,sourceFolder=/`,
    (error, stdout, stderr) => handleError(error, stdout, stderr, () => {
        deleteFolder(`${path.join(output, '/test')}`);
        deleteFolder(`${path.join(output, '/docs')}`);

        copyFile(`${path.join(__dirname, './ApiClient.js')}`, `${output}`)
    }));

