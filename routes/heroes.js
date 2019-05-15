const Router = require('koa-router');
const HeroController = require('../app/controllers/heroController');

const router = new Router({
    prefix: '/api/v1'
});

/**
 * 用户接口
 */
router.post('/hero/list',HeroController.list);
router.post('/hero/add',HeroController.add);
module.exports = router
