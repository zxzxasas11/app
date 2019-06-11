const fs = require('fs');
const path = require('path');
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
        // 上传单个文件
        /*const file = ctx.request.files.file; // 获取上传文件
        console.log(file.path);
        // 创建可读流
        const reader = fs.createReadStream(file.path);
        let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath,'0777');
        }
        // 创建可写流
        const upStream = fs.createWriteStream(filePath);
        // 可读流通过管道写入可写流
        reader.pipe(upStream);
        return ctx.body = "上传成功！";*/
    }


}

module.exports = UploadFileController;
