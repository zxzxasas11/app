const multer = require('koa-multer');
const path = require('path');
const Router = require('koa-router');
const UUID = require('uuid');
const UserController = require('../app/controllers/user');
const BillController = require('../app/controllers/bill');
const MenuController = require('../app/controllers/menu');
const UploadController =require('../app/controllers/uploadFile');
const ResourceController =require('../app/controllers/resource');
const CategoryController = require('../app/controllers/category');
const BarrageController = require('../app/controllers/barrage');
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
router.get("/bill/getAll",BillController.getAll);
router.post("/bill/delete",BillController.deleteById);

/**
 * 菜单接口
 *
 */
router.get("/menu/getAll",MenuController.getAll);
router.get("/menu/getByMenuPid",MenuController.geyOneByMenuPid);
router.post("/menu/addMenu",MenuController.create);


/**
 *分类接口
 *
 */
router.post("/category/add",CategoryController.create);
router.get("/category/getByPid",CategoryController.getByPid);
router.get("/category/getById",CategoryController.getById);
router.get("/category/getAll",CategoryController.getAll);


/**
 * 上传资源
 *
 *
 */
router.post("/resource/add",ResourceController.create);
router.get("/resource/getById",ResourceController.getById);
router.get("/resource/getByResourceId",ResourceController.getByResourceId);
router.post("/resource/updateByResourceId",ResourceController.updateByResourceId);
/**
 * 弹幕接口
 *
 */
router.post("/barrage/add",BarrageController.create);

/**
 * 上传文件
 */

let date =new Date();
let uploadPath = "G:/upload/"+date.getFullYear().toString()+(date.getMonth()+1).toString()+date.getDate();
let storage = multer.diskStorage({
  destination: path.resolve(uploadPath),
  filename: (ctx, file, cb)=>{
    cb(null, UUID.v1().replace(/-/g,"")+"."+file.originalname.split(".")[1]);
  }
});
let fileFilter = (ctx, file ,cb)=>{
//过滤上传的后缀为txt的文件
  if (file.originalname.split('.').splice(-1) == 'txt'){
    cb(null, false);
  }else {
    cb(null, true);
  }
};
let upload = multer({ storage: storage, fileFilter: fileFilter });

router.post('/upload', upload.single('file'), UploadController.upload);
module.exports = router;
