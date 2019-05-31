
const Router = require('koa-router');
const UserController = require('../app/controllers/user');

const router = new Router({
  prefix: '/api/v1'
});

/**
 * 用户接口
 */
router.post('/user/create',UserController.create);
/**
 * 文章接口
 */

module.exports = router
