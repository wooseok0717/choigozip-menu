const router = require('express').Router();
const controllers = require('./controllers');

router.get('/getCategories', controllers.getCategories);

router.get('/loadMenuList', controllers.loadMenuList);

router.get('/activePromos', controllers.loadActivePromos);

module.exports = router;