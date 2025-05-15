function handleError(error, stdout, stderr, toFun) {
    if (error) {
        console.error(`执行错误: ${ error.message }`);
        if (error.stderr) {
            console.error(`错误输出: ${ error.stderr }`);
        }
        return;
    }
    if (stderr) {
        console.error(`命令错误输出: ${ stderr }`);
        return;
    }
    console.log(`成功输出: ${ stdout }`);

    if (toFun) toFun()
}

module.exports = handleError;