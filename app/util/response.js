
module.exports = function (ctx,code,msg,data){
    ctx.response.status=code;
    if(data){
        ctx.body={
            code: code,
            message:msg,
            data:data
        }
    }
    else {
        ctx.body = {
            code: code,
            message: msg
        }
    }

};
