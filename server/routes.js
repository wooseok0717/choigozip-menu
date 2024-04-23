const router = require('express').Router();
const controllers = require('./controllers');

router.get('/getCategories', controllers.getCategories);

router.get('/loadMenuList', controllers.loadMenuList)

module.exports = router;