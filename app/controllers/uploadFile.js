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
        let url = ctx.req.file.path;
        let arr = url.split("upload")[1].replace(/\\/g,'/');
        if (ctx.req.file){
            ctx.body = {
                code:200,
                msg:'upload success',
                data:arr
            };
        } else {
            ctx.body = 'upload error';
        }
    }


}

module.exports = UploadFileController;
