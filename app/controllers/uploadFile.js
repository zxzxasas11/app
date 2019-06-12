const fs = require('fs');
const path = require('path');
class UploadFileController {
    /**
     * 上传文件
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async upload(ctx){
        console.log(ctx.req.file.path);
        if (ctx.req.file){
            ctx.body = 'upload success';
        } else {
            ctx.body = 'upload error';
        }
    }


}

module.exports = UploadFileController;
