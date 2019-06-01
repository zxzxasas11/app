
const Router = require('koa-router');
const UserController = require('../app/controllers/user');

const router = new Router({
  prefix: '/api/v1'
});

/**
 * 用户接口
 */
router.post('/user/register',UserController.create);
router.get('/user/getAll',UserController.getAll);
router.get("/user/getOne",UserController.geyOneByName);
router.post("/user/login",UserController.login);
/**
 * 文章接口
 */

module.exports = router
