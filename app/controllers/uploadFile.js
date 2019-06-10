const fs = require('fs');
class UploadFileController {
    /**
     * 上传文件
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async upload(ctx){
        const file = ctx.request.files.file; // 获取上传文件
        console.log(file.path);
        const reader = fs.createReadStream(file.path); // 创建可读流
        const ext = file.name.split('.').pop(); // 获取上传文件扩展名
        const upStream = fs.createWriteStream(`upload/${Math.random().toString()}.${ext}`); // 创建可写流
        reader.pipe(upStream); // 可读流通过管道写入可写流
        return ctx.body = '上传成功';
    }


}

module.exports = UploadFileController;
