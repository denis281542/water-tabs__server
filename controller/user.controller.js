const db = require('../db');

class UserController {
    async createUser(req, res) {
        try {
            const {name, phone} = req.body;
            const newPerson = await db.query(`INSERT INTO person (name, phone) VALUES($1, $2) RETURNING *`, [name, phone])
            return res.json(newPerson.rows[0]) 
        } catch (err) {
            console.log(err);
        }
    }
    async registration(req, res) {
        try {
            const {name, login, email, password} = req.body;
            const findUserByLogin = await db.query(`SELECT * FROM person WHERE login='${login}'`)
            if(findUserByLogin.rows[0]) {
                return res.status(400).json({ error: `Пользователь с таким логином уже сужествует` });
            }
            const newPerson = await db.query(`INSERT INTO person (name, login, email, password) VALUES($1, $2, $3, $4) RETURNING *`, [name, login, email, password])
            return res.json(newPerson.rows[0])
        } catch (err) {
            console.log(err);
        }
    }
    async login(req, res) {
        try {
            const {phone, password} = req.body;
            const findUserByPhone = await db.query(`SELECT * FROM person WHERE phone='${phone}'`)
            if(!findUserByPhone.rows[0]) {
                return res.status(400).json({ error: `Пользователь с номером телефона ${phone} не найден` });
            }

            return res.json(findUserByPhone.rows[0])
        } catch (err) {
            console.log(err);
        }
    }
    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            const user = await db.query(`DELETE FROM person where id = $1`, [id] )
            res.json(user.rows[0]) 
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UserController();