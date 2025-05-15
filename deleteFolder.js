const fs = require('fs');
const path = require('path');

function deleteFolder(dirPath) {
    if (fs.existsSync(dirPath)) {
        fs.readdirSync(dirPath).forEach(file => {
            const curPath = path.join(dirPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolder(curPath); // 递归删除子目录
            } else {
                fs.unlinkSync(curPath); // 删除文件
            }
        });
        fs.rmdirSync(dirPath); // 删除空目录
        console.log(`文件夹已删除: ${dirPath}`);
    } else {
        console.log(`文件夹不存在: ${dirPath}`);
    }
}

module.exports = deleteFolder;