
const Router = require('koa-router');
const UserController = require('../app/controllers/user');
const BillController = require('../app/controllers/bill');
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
 * 账单接口
 */
router.post("/bill/create",BillController.create);
module.exports = router
