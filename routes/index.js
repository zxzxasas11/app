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
const HistoryController = require('../app/controllers/history');
const GeneralizeController = require('../app/controllers/generalize');
const router = new Router({
  prefix: '/api/v1'
});

/**
 * user接口
 */
router.post('/user/register',UserController.create);
router.get('/user/getAll',UserController.getAll);
router.get("/user/getOne",UserController.geyOneByName);
router.post("/user/login",UserController.login);
/**
 * bill接口
 */
router.post("/bill/create",BillController.create);
router.post("/bill/upload",BillController.uploadExcel);
router.get("/bill/getAll",BillController.getAll);
router.post("/bill/delete",BillController.deleteById);

/**
 * menu接口
 *
 */
router.get("/menu/getAll",MenuController.getAll);
router.get("/menu/getByMenuPid",MenuController.geyOneByMenuPid);
router.post("/menu/addMenu",MenuController.create);


/**
 *category接口
 *
 */
router.post("/category/add",CategoryController.create);
router.get("/category/getByPid",CategoryController.getByPid);
router.get("/category/getById",CategoryController.getById);
router.get("/category/getAll",CategoryController.getAll);


/**
 * resource接口
 *
 *
 */
router.post("/resource/add",ResourceController.create);
router.get("/resource/getById",ResourceController.getById);
router.get("/resource/getByResourceId",ResourceController.getByResourceId);
router.post("/resource/updateByResourceId",ResourceController.updateByResourceId);
/**
 * barrage接口
 *
 */
router.post("/barrage/add",BarrageController.create);


/**
 * history接口
 *
 */
router.post("/history/add",HistoryController.create);

/**
 * generalize接口
 *
 */
router.get("/generalize/getInfo",GeneralizeController.getInfo);
router.post("/generalize/update",GeneralizeController.update);

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
