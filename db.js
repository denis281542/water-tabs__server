const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    database: "water_tabs",
    password: "Dd123123",
    host: "localhost",
    port: "5432"
})



module.exports = pool; 