/*
export default {
    setResponse(ctx){
        ctx.response.status=200;
        ctx.body={
            code: 200,
            data:data
        }
    }
}

*/
module.exports = function setResponse(ctx){
    ctx.response.status=200;
    ctx.body={
        code: 200,
        data:data
    }
}
