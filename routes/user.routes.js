const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.post('/user', userController.createUser)
router.post('/login', userController.login)
router.delete('/user/:id', userController.deleteUser)

module.exports = router;