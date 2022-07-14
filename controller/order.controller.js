const db = require('../db');

class OrderController {
    async createOrder(req, res) {
        const {date, comment, user_id} = req.body;
        const newOrder = await db.query(`INSERT INTO "order" (date, comment, user_id) VALUES($1, $2, $3) RETURNING *`, [date, comment, user_id])
        res.json(newOrder.rows[0]) 
    }
    async getOrderById(req, res) {
        const id = req.query.id;
        const orders = await db.query(`select * from "order" where user_id = $1`, [id])
        res.json(orders.rows) 
    }
}

module.exports = new OrderController();