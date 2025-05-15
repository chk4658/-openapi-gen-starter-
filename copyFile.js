const fs = require('fs/promises');
const path = require('path');

async function copyFile(sourcePath, targetDir) {
    try {
        // 确保目标目录存在
        await fs.mkdir(targetDir, { recursive: true });

        // 获取文件名（从源路径提取）
        const fileName = path.basename(sourcePath);

        // 目标文件路径
        const targetPath = path.join(targetDir, fileName);

        // 复制文件
        await fs.copyFile(sourcePath, targetPath);
        console.log(`文件已复制到: ${targetPath}`);
    } catch (err) {
        console.error("复制文件失败:", err);
    }
}

module.exports = copyFile;
