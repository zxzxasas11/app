const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ResourceModel = require("../modules/resource");
class UploadFileController {
    /**
     * 上传文件
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async upload(ctx){
        let url = ctx.req.file.path;
        let arr = url.split("upload")[1].replace(/\\/g,'/');
        let urlData = arr.split(".")[0]+".mp4";
        if (ctx.req.file){
            ctx.body = {
                code:200,
                msg:'上传成功',
                data:urlData
            };
        } else {
            ctx.body = '上传失败';
        }
        let index = ctx.req.file.path.lastIndexOf(".");

        if(ctx.req.file.path.substring(index+1)!=='mp4'){
            ffmpeg(ctx.req.file.path)
                .format('mp4')
                .on('error', function(err) {
                    console.log('An error occurred: ' + err.message);
                })
                .on('end',async function() {
                    console.log('转码成功 !');
                    //转码完成后删除源文件
                    fs.unlink(ctx.req.file.path,function(err){
                        if(err){
                            throw err;
                        }
                        console.log('文件'+ctx.req.file.path+"已经被删除");
                    });
                    await ResourceModel.update(urlData,{status:1});
                })
                .save(ctx.req.file.path.substring(0,index)+".mp4");

            /*ffmpeg(ctx.req.file.path)
            // set video bitrate
                .videoBitrate(1024)
                // set aspect ratio
                .aspect('16:9')
                // set size in percent
                .size('50%')
                // set fps
                .fps(24)
                // set audio bitrate
                .audioBitrate('128k')
                // set audio codec
                // set number of audio channels
                .audioChannels(2)
                // set custom option
                // set output format to force
                .format('mp4')
                // setup event handlers
                .on('end', function() {
                    console.log('file has been converted succesfully');
                })
                .on('error', function(err) {
                    console.log('an error happened: ' + err.message);
                })
                // save to file
                .save('outtest.mp4');*/
            //new ffmpeg(ctx.req.file.path).format('mp4').save("123.mp4")
        }
    }


}

module.exports = UploadFileController;
