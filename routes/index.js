
const Router = require('koa-router');
const UserController = require('../app/controllers/user');
const BillController = require('../app/controllers/bill');
const MenuController = require('../app/controllers/menu')
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
router.post("/bill/upload",BillController.uploadExcel);
router.get("/bill/getAll",BillController.getAll)

/**
 * 菜单接口
 *
 */
router.get("/menu/getAll",MenuController.getAll);
router.get("/menu/getByMenuPid",MenuController.geyOneByMenuPid);
router.post("/menu/addMenu",MenuController.create);
module.exports = router
