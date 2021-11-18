const {Pool} = require('pg')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "booksapi",
    password: "alexs59208",
    port: '5432',
});



module.exports = pool;