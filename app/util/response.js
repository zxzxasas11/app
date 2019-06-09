/*export default {
    setResponse(ctx){
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message:"123"
        }
    }
}*/

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
