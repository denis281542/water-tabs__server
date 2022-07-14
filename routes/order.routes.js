const Router = require('express');
const router = new Router();
const orderController = require('../controller/order.controller');

router.post('/order', orderController.createOrder)
router.get('/order', orderController.getOrderById)

module.exports = router;