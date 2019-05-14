
const Router = require('koa-router');
const ArtileController = require('../app/controllers/article');
const UserController = require('../app/controllers/user');

const router = new Router({
  prefix: '/api/v1'
});

/**
 * 用户接口
 */
router.post('/user/create',UserController.create);
router.post('/user/list',UserController.list);
router.post('/user/listByName',UserController.listByName);
/**
 * 文章接口
 */
//创建文章
router.post('/article/create',ArtileController.create);

//获取文章详情
/*router.get('/article/:id',ArtileController.detail);*/

router.get('/article/:id',ArtileController.delete)

module.exports = router
