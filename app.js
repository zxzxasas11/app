const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const path = require('path');
const index = require('./routes/index');
const cors = require('koa2-cors');
const jwt = require('koa-jwt')
const JWTToken = require('./app/middleware/JWTToken');
const secret = require('./config/secret');
const JWTPath = require('./app/middleware/JWTPath')
app.use(cors()) //使用cors
const multer = require('koa-multer');
// error handler
onerror(app);
app.use(JWTToken());
//设置过滤器
app.use(jwt({secret: secret.sign}).unless({
  path:JWTPath
}));


// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// routes
app.use(index.routes(), index.allowedMethods());
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

//刷新token
app.use((ctx, next) => {
  if (ctx.header && ctx.header.authorization) {
    const parts = ctx.header.authorization.split(' ');
    if (parts.length === 2) {
      //取出token
      const scheme = parts[0];
      const token = parts[1];
      if (/^Bearer$/i.test(scheme)) {
        try {
          //jwt.verify方法验证token是否有效
          jwt.verify(token, secret.sign, {
            complete: true
          });
        } catch (error) {
          //token过期 生成新的token
          const newToken = getToken(user);
          //将新token放入Authorization中返回给前端
          ctx.res.setHeader('Authorization', newToken);
        }
      }
    }
  }
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body =
          'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }});
});





module.exports = app;
